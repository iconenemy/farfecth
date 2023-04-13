import {
	Injectable,
	NotAcceptableException,
	UnauthorizedException
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { hash, verify } from 'argon2';

import { UserService } from 'src/user/user.service';
import { LoginDto, AuthTokensDto, RegisterDto } from './dto/auth.dto';
import { IGooglePayload } from './types/google.payload';
import { IJwtPayload } from './types/jwt.payload';

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly jwtService: JwtService,
		private readonly configService: ConfigService
	) {}

	async signUp(dto: RegisterDto) {
		return await this.userService.create(dto);
	}

	async signIn(dto: LoginDto) {
		const { email, password } = dto;

		const user = await this.userService.findByEmail(email);
		if (user && (await verify(user.password, password))) {
			const { role, id } = user;

			const payload = { email, role, id };

			const tokens = await this.issueToken(payload);

			const hashedToken = await hash(tokens.refreshToken);
			this.userService.updateHashedToken(id, hashedToken);

			return {
				...tokens,
				user: { ...payload }
			};
		} else {
			throw new NotAcceptableException('Incorrect login credentials!');
		}
	}

	async refresh(id: string, token: string) {
		if (!id || !token) {
			throw new UnauthorizedException(
				'The client does not have access rights to the content'
			);
		}
		const user = await this.userService.findById(id);
		if (user) {
			const { role, email } = user;

			const payload = { email, role, id };

			const { refreshToken, accessToken } = await this.issueToken(payload);

			const hashedToken = await hash(refreshToken);
			this.userService.updateHashedToken(id, hashedToken);

			return { refreshToken, accessToken, role, email, id };
		} else {
			throw new UnauthorizedException('Incorrect login credentials!');
		}
	}

	async logout(id: string, token: string) {
		if (!id || !token) {
			throw new UnauthorizedException(
				'The client does not have access rights to the content'
			);
		}
		await this.userService.updateHashedToken(id, null);
	}

	private async issueToken(payload: IJwtPayload): Promise<AuthTokensDto> {
		const { id, role, email } = payload;

		const [accessToken, refreshToken] = await Promise.all([
			this.jwtService.signAsync(
				{
					sub: id,
					role,
					email
				},
				{
					secret: this.configService.get<string>('ACCESS_TOKEN_KEY'),
					expiresIn: this.configService.get<string>('ACCESS_TOKEN_EXPIRES_IN')
				}
			),
			this.jwtService.signAsync(
				{
					sub: id,
					role,
					email
				},
				{
					secret: this.configService.get<string>('REFRESH_TOKEN_KEY'),
					expiresIn: this.configService.get<string>('REFRESH_TOKEN_EXPIRES_IN')
				}
			)
		]);

		return {
			accessToken,
			refreshToken
		};
	}

	async signInWithGoogle(payload: IGooglePayload) {
		const { email, google_id } = payload;

		const userByGoogleId = await this.userService.findByGoogleId(google_id);
		if (userByGoogleId) {
			return await this.signIn({ email, password: google_id });
		}

		const userByEmail = await this.userService.findByEmail(email);

		if (userByEmail) {
			throw new NotAcceptableException(
				'The account with the provided email currently exists. Please choose another one.'
			);
		}

		await this.userService.createWithGoogle(payload);
		return await this.signIn({ email, password: google_id });
	}
}
