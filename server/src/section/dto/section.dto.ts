import {
	IsNotEmpty,
	MinLength,
	MaxLength,
	IsOptional,
	IsArray,
} from 'class-validator';

export class CreateSectionDto {
	@IsNotEmpty({ message: 'Section name field can not be empty' })
	@MinLength(3, {
		message:
			'Section name is too short. Minimal length is $constraint1 characters, but actual is $value'
	})
	@MaxLength(15, {
		message:
			'Section name is too long. Maximal length is $constraint1 characters, but actual is $value'
	})
    section_name: string;
}

export class UpdateSectionDto {
	@IsNotEmpty({ message: 'Section name field can not be empty' })
	@MinLength(3, {
		message:
			'Section name is too short. Minimal length is $constraint1 characters, but actual is $value'
	})
	@MaxLength(15, {
		message:
			'Section name is too long. Maximal length is $constraint1 characters, but actual is $value'
	})
    section_name: string;
}

export class CategoryToSectionDto {
	@IsNotEmpty({ message: 'Secion id field can not be empty' })
	category_id: string
}

export class QuerySectionDto {
	@IsArray()
	@IsOptional()
	categories: string[]
}