import {
	IsNotEmpty,
	Matches,
	MinLength,
	MaxLength,
	IsEmail,
	IsBoolean,
	IsOptional
} from 'class-validator';

import { UserRoleType } from '../types/user.type';

export class UpdateUserDto {
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
	@IsOptional()
	first_name: string;

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
	@IsOptional()
	last_name: string;

	@IsNotEmpty()
	@IsEmail()
	@IsOptional()
	email: string;

	@IsNotEmpty()
	@MinLength(6, {
		message:
			'Password is too short. Minimal length is $constraint1 characters, but actual is $value'
	})
	@MaxLength(25, {
		message:
			'Password is too long. Maximal length is $constraint1 characters, but actual is $value'
	})
	@IsOptional()
	password: string;

	@IsNotEmpty()
	@Matches(/^\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})$/)
	@IsOptional()
	phone_number: string;

	@IsBoolean()
	@IsOptional()
	is_active: boolean;

	@IsOptional()
	role: UserRoleType;
}

