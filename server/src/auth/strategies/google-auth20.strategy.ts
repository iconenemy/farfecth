import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
	constructor(
		private readonly configService: ConfigService,
		private readonly authService: AuthService
	) {
		super({
			clientID: configService.get<string>('CLIENT_ID'),
			clientSecret: configService.get<string>('CLIENT_SECRET'),
			callbackURL: configService.get<string>('CALLBACK_URL'),
			scope: ['email', 'profile']
		});
	}

	async validate(refreshToken: string, accessToken: string, profile: Profile) {
		const user = {
			google_id: profile.id,
			email: profile.emails[0].value,
			first_name: profile.name.givenName,
		};
		return user;
	}
}
