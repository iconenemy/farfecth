import {
	IsNotEmpty,
	Matches,
	MinLength,
	MaxLength,
	IsEmail,
	IsBoolean,
	IsOptional,
	IsString
} from 'class-validator';

import { UserRoleType } from 'src/user/types/user.type';

export class RegisterDto {
	@IsString()
	@IsNotEmpty({ message: 'First name field can not be empty' })
	@MinLength(3, {
		message:
			'First name is too short. Minimal length is $constraint1 characters, but actual is $value'
	})
	@MaxLength(15, {
		message:
			'First name is too long. Maximal length is $constraint1 characters, but actual is $value'
	})
	@Matches(/^[A-Z]{1}[a-z]+$/)
	first_name!: string;

	@IsString()
	@IsOptional()
	@IsNotEmpty({ message: 'Last name field can not be empty' })
	@MinLength(3, {
		message:
			'Last name is too short. Minimal length is $constraint1 characters, but actual is $value'
	})
	@MaxLength(15, {
		message:
			'Last name is too long. Maximal length is $constraint1 characters, but actual is $value'
	})
	@Matches(/^[A-Z]{1}[a-z]+$/)
	last_name: string;

	@IsNotEmpty()
	@IsEmail()
	email!: string;

	@IsString()
	@IsNotEmpty()
	@MinLength(6, {
		message:
			'Password is too short. Minimal length is $constraint1 characters, but actual is $value'
	})
	@MaxLength(25, {
		message:
			'Password is too long. Maximal length is $constraint1 characters, but actual is $value'
	})
	password: string;

	@IsNotEmpty()
	@IsOptional()
	@Matches(/^\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})$/)
	phone_number: string;

	@IsBoolean()
	@IsOptional()
	is_active: boolean;

	@IsOptional()
	role: UserRoleType;
}

export class LoginDto {
	@IsNotEmpty()
	@IsEmail()
	email!: string;

	@IsString()
	@IsNotEmpty()
	@MinLength(6, {
		message:
			'Password is too short. Minimal length is $constraint1 characters, but actual is $value'
	})
	@MaxLength(25, {
		message:
			'Password is too long. Maximal length is $constraint1 characters, but actual is $value'
	})
	password!: string;
}

export class AuthTokensDto {
	accessToken: string;
	refreshToken: string;
}

export class RegisterWithGoogleDto {
	@IsString()
	@IsNotEmpty({ message: 'First name field can not be empty' })
	@MinLength(3, {
		message:
			'First name is too short. Minimal length is $constraint1 characters, but actual is $value'
	})
	@MaxLength(15, {
		message:
			'First name is too long. Maximal length is $constraint1 characters, but actual is $value'
	})
	@Matches(/^[A-Z]{1}[a-z]+$/)
	first_name!: string;

	@IsNotEmpty()
	@IsEmail()
	email!: string;
	
	@IsNotEmpty()
	@IsString()
	google_id!: string;

}