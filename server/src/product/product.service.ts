import { Injectable, NotFoundException } from '@nestjs/common';
import {
	CreateProductDto,
	QueryProductDto,
	UpdateProductDto
} from './dto/product.dto';
import { Product } from './entities/product.entity';
import { Between, IsNull, Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { S3Service } from 'src/aws/s3.service';
import { SectionService } from 'src/section/section.service';
import { CategoryService } from 'src/category/category.service';
import { SizeService } from 'src/size/size.service';
import { In } from 'typeorm';

@Injectable()
export class ProductService {
	constructor(
		@InjectRepository(Product)
		private readonly productService: Repository<Product>,
		private readonly s3Service: S3Service,
		private readonly sectionService: SectionService,
		private readonly categoryService: CategoryService,
		private readonly sizeService: SizeService
	) {}

	async createProduct(payload: CreateProductDto, file: Express.Multer.File) {
		const { category, section, size, in_stock } = payload;

		const promises = [];
		size.forEach(item =>
			promises.push(this.sizeService.findSizeById(item))
		);
		const resultSizes = await Promise.all(promises).catch(() => {
			throw new NotFoundException('Invalid uuid');
		});

		const categoryById = await this.categoryService.findCategoryById(
			category
		);
		const sectionById = await this.sectionService.findSectionById(section);
		const imageUrl = await this.s3Service.upload(
			file.buffer,
			file.filename
		);

		return this.productService.save(
			this.productService.create({
				...payload,
				in_stock: Boolean(in_stock),
				category: categoryById,
				section: sectionById,
				image: imageUrl,
				size: resultSizes
			})
		);
	}

	findOneProductById(id: string) {
		return this.productService.findOne({
			where: { id },
			relations: { category: true, section: true, size: true }
		});
	}

	async findProductsByQuery(query: QueryProductDto) {
		const {
			name = '',
			price_less = 999999,
			price_more = 0,
			colors = [],
			in_stock,
			section,
			categories = [],
			sizes = [],
			page = 1,
			price_sort = null,
			new_in_sort = null
		} = query;
		return this.productService.find({
			where: {
				name: Like(`%${name}%`),
				category: {
					id: categories.length < 1 ? In[''] : In(categories)
				},
				section: { id: section },
				price: Between(price_more, price_less),
				size: {
					id: sizes.length < 1 ? In[''] : In(sizes)
				},
				in_stock: in_stock,
				color: colors.length < 1 ? In[''] : In(colors)
			},
			relations: {
				category: true,
				section: true,
				size: true
			},
			order: {
				price: 'desc'
				// created_at: new_in_sort,
			},
			take: 8
			// skip: 10 * (page - 1)
		});
	}

	update(id: number, updateProductDto: UpdateProductDto) {
		return `This action updates a #${id} product`;
	}

	remove(id: number) {
		return `This action removes a #${id} product`;
	}

	getCountOfProductsBySectionId(id: string): Promise<number> {
		return this.productService.count({ where: { section: { id } } });
	}

	getCountOfProductByQuery(query: QueryProductDto): Promise<number> {
		const { section, categories = [], sizes = [], colors = [] } = query;
		return this.productService.count({
			where: {
				section: {
					id: section
				},
				category: {
					id: categories.length < 1 ? In[''] : In(categories)
				},
				size: {
					id: sizes.length < 1 ? In[''] : In(sizes)
				},
				color: colors.length < 1 ? In[''] : In(colors)
			}
		});
	}
}
