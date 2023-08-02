import {
	Inject,
	Injectable,
	NotAcceptableException,
	forwardRef
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, In, Repository, UpdateResult } from 'typeorm';
import { Section } from './entities/section.entity';
import { CategoryService } from 'src/category/category.service';
import { CreateSectionDto, UpdateSectionDto, QuerySectionDto } from './dto/section.dto';

@Injectable()
export class SectionService {
	constructor(
		@InjectRepository(Section)
		private readonly sectionRepository: Repository<Section>,
		@Inject(forwardRef(() => CategoryService))
		private readonly categoryService: CategoryService
	) {}

	findAllSections(): Promise<Section[]> {
		return this.sectionRepository.find();
	}

	findSectionById(id: string, query?: QuerySectionDto): Promise<Section> {
		const {categories = []} = query
		
		return this.sectionRepository.findOne({
			where: {
				id: id,
				category: {
					id: categories.length < 1 ? In[''] : In(categories)
				}
			},
			relations: { category: true }
		});
	}

	findSectionByName(section_name: string): Promise<Section> {
		return this.sectionRepository.findOneBy({ section_name });
	}

	async createSection(payload: CreateSectionDto): Promise<Section> {
		const { section_name } = payload;
		const sectionByName = await this.findSectionByName(section_name);
		if (sectionByName)
			throw new NotAcceptableException(
				'The section with the provided name currently exists. Please choose another one.'
			);
		return this.sectionRepository.save(
			this.sectionRepository.create({ ...payload })
		);
	}

	deleteSectionById(id: string): Promise<DeleteResult> {
		return this.sectionRepository.delete({ id });
	}

	updateSectionById(
		id: string,
		payload: UpdateSectionDto
	): Promise<UpdateResult> {
		return this.sectionRepository.update(id, { ...payload });
	}

	async addCategoryToSection(
		section_id: string,
		category_id: string
	): Promise<Section> {
		const section = await this.sectionRepository.findOne({
			where: { id: section_id },
			relations: ['category']
		});
		if (!section)
			throw new NotAcceptableException(
				'The section with the provided id currently exists. Please choose another one.'
			);

		const category = await this.categoryService.findCategoryById(
			category_id
		);

		section.category = [...section.category, category];
		return await this.sectionRepository.save(section);
	}
}
