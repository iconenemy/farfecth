import {
	Controller,
	Get,
	Post,
	Body,
	UseGuards,
	Request,
	Response
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { GoogleAuthGuard } from './guard/google-auth20.guard';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { RefreshAuthGuard } from './guard/refresh-auth.guard';

@Controller('auth')
export class AuthController {
	constructor(
		private readonly authService: AuthService,
		private readonly configService: ConfigService
	) {}

	@Post('register')
	async register(@Body() pyload: RegisterDto) {
		return this.authService.signUp(pyload);
	}

	@Post('login')
	async login(@Body() dto: LoginDto, @Response({ passthrough: true }) res) {
		const { user, refreshToken, accessToken } = await this.authService.signIn(
			dto
		);

		res.cookie('refresh_token', refreshToken, {
			httpOnly: true,
			expires: this.configService.get<number>('COOKIE_EXPIRES_TIME'),
			maxAge: this.configService.get<number>('COOKIE_MAX_AGE')
		});

		return { user, refreshToken, accessToken };
	}

	@Get('logout')
	@UseGuards(RefreshAuthGuard)
	logout(@Request() req, @Response({ passthrough: true }) res) {
		const { sub, refresh_token } = req.user;

		this.authService.logout(sub, refresh_token);

		res.clearCookie('refresh_token');
	}

	@Get('refresh')
	@UseGuards(RefreshAuthGuard)
	async refresh(@Request() req, @Response({ passthrough: true }) res) {
		const { sub, refresh_token } = req.user;

		const { refreshToken, accessToken, role, email, id } =
			await this.authService.refresh(sub, refresh_token);

		res.cookie('refresh_token', refreshToken, {
			httpOnly: true,
			expires: this.configService.get<number>('COOKIE_EXPIRES_TIME'),
			maxAge: this.configService.get<number>('COOKIE_MAX_AGE')
		});
		return { refreshToken, accessToken, user: { role, email, id } };
	}

	@Get('google')
	@UseGuards(GoogleAuthGuard)
	googleLogin() {}

	@Get('google/redirect')
	@UseGuards(GoogleAuthGuard)
	async googleRedirect(@Request() req, @Response({ passthrough: true }) res) {
		const { refreshToken } =
			await this.authService.signInWithGoogle(req.user);

		res.cookie('refresh_token', refreshToken, {
			httpOnly: true,
			expires: this.configService.get<number>('COOKIE_EXPIRES_TIME'),
			maxAge: this.configService.get<number>('COOKIE_MAX_AGE')
		});

		res.redirect(this.configService.get<string>('CLIENT_URL'));
	}
}
