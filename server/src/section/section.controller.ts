import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateSectionDto, UpdateSectionDto, CategoryToSectionDto, QuerySectionDto } from './dto/section.dto';
import { SectionService } from './section.service';
import { query } from 'express';


@Controller('sections')
export class SectionController {
	constructor(private readonly sectionService: SectionService) {}

	@Post()
	async createSection(@Body() dto: CreateSectionDto) {
		return await this.sectionService.createSection(dto);
	}

	@Get()
	async findAllSections() {
		return await this.sectionService.findAllSections();
	}

	@Get(':id')
	async findSectionById(@Param('id') id: string, @Query() query?: QuerySectionDto) {
		return await this.sectionService.findSectionById(id, query);
	}

	@Get('name/:name')
	async findSectionByName(@Param('name') name: string) {
		return await this.sectionService.findSectionByName(name)
	}

	@Delete(':id')
	async deleteSectionById(@Param('id') id: string) {
		return await this.sectionService.deleteSectionById(id);
	}

	@Put(':id')
	async updateSectionById(
		@Param('id') id: string,
		@Body() dto: UpdateSectionDto
	) {
		return await this.sectionService.updateSectionById(id, dto);
	}

	@Patch(':id')
	async addCategoryToSectionById(
		@Param('id') section_id: string,
		@Body() dto: CategoryToSectionDto
	) {
		const { category_id } = dto;

		return await this.sectionService.addCategoryToSection(
			section_id,
			category_id
		);
	}
}
