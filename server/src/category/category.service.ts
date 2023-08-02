import {
	Inject,
	Injectable,
	NotAcceptableException,
	forwardRef
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { SectionService } from 'src/section/section.service';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
	constructor(
		@InjectRepository(Category)
		private readonly categoryRepository: Repository<Category>,
		@Inject(forwardRef(() => SectionService))
		private readonly sectionService: SectionService
	) {}

	findAllCategories(): Promise<Category[]> {
		return this.categoryRepository.find();
	}

	findCategoryById(id: string): Promise<Category> {
		return this.categoryRepository.findOne({
			where: { id },
			relations: ['section']
		});
	}

	private findCategoryByName(category_name: string): Promise<Category> {
		return this.categoryRepository.findOneBy({ category_name });
	}

	async createCategory(payload: CreateCategoryDto): Promise<Category> {
		const { category_name } = payload;
		const categoryByName = await this.findCategoryByName(category_name);
		if (categoryByName)
			throw new NotAcceptableException(
				'The category with the provided name currently exists. Please choose another one.'
			);

		return this.categoryRepository.save(
			this.categoryRepository.create({ ...payload })
		);
	}

	async deleteCategoryById(id: string) {
		const category = await this.categoryRepository.findOne({
			where: { id },
			relations: { section: true }
		});

		category.section = category.section.filter(category => {
			category.id !== id;
		});

		await this.categoryRepository.save(category);

		return this.categoryRepository.delete({ id });
	}

	updateCategoryById(
		id: string,
		payload: UpdateCategoryDto
	): Promise<DeleteResult> {
		return this.categoryRepository.update(id, { ...payload });
	}

	async addSectionToCategory(
		category_id: string,
		section_id: string
	): Promise<Category> {
		const category = await this.categoryRepository.findOne({
			where: { id: category_id },
			relations: ['section']
		});
		const section = await this.sectionService.findSectionById(section_id);
		category.section = [...category.section, section];
		return await this.categoryRepository.save(category);
	}
}
