import {
	IsNotEmpty,
	MinLength,
	MaxLength,
} from 'class-validator';

export class CreateCategoryDto {
	@IsNotEmpty({ message: 'Category name field can not be empty' })
	@MinLength(3, {
		message:
			'Category name is too short. Minimal length is $constraint1 characters, but actual is $value'
	})
	@MaxLength(30, {
		message:
			'Category name is too long. Maximal length is $constraint1 characters, but actual is $value'
	})
    category_name: string;
}

export class UpdateCategoryDto {
	@IsNotEmpty({ message: 'Category name field can not be empty' })
	@MinLength(3, {
		message:
			'Category name is too short. Minimal length is $constraint1 characters, but actual is $value'
	})
	@MaxLength(30, {
		message:
			'Category name is too long. Maximal length is $constraint1 characters, but actual is $value'
	})
    category_name: string;
}

export class SectionToCategoryDto {
	@IsNotEmpty({ message: 'Category id field can not be empty' })
	section_id: string
}
