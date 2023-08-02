import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto, UpdateCategoryDto, SectionToCategoryDto } from './dto/category.dto';


@Controller('categories')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@Post()
	async createCategory(@Body() dto: CreateCategoryDto) {
		return await this.categoryService.createCategory(dto);
	}

	@Get()
	async findAllCategories() {
		return await this.categoryService.findAllCategories();
	}

	@Get(':id')
	async findCategoryById(@Param('id') id: string) {
		return await this.categoryService.findCategoryById(id);
	}

	@Delete(':id')
	async deleteCategoryById(@Param('id') id: string) {
		return await this.categoryService.deleteCategoryById(id);
	}

	@Put(':id')
	async updateCategoryById(
		@Param('id') id: string,
		@Body() dto: UpdateCategoryDto
	) {
		return await this.categoryService.updateCategoryById(id, dto);
	}

	@Patch(':id')
	async addSectionToCategoryById(
		@Param('id') category_id: string,
		@Body() dto: SectionToCategoryDto
	) {
		const { section_id } = dto;

		return await this.categoryService.addSectionToCategory(
			category_id,
			section_id
		);
	}
}
