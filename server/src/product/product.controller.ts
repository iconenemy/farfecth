import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	HttpStatus,
	ParseFilePipeBuilder,
	UploadedFile,
	UseInterceptors,
	Query
} from '@nestjs/common';
import { ProductService } from './product.service';
import {
	CreateProductDto,
	QueryProductDto,
	UpdateProductDto
} from './dto/product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { v4 as uuid } from 'uuid';

@Controller('products')
export class ProductController {
	constructor(
		private readonly productService: ProductService,
	) {}

	@Post()
	@UseInterceptors(
		FileInterceptor('image', {
			fileFilter: (
				req: any,
				file: Express.Multer.File,
				callback: (error: Error | null, acceptFile: boolean) => void
			): void => {
				file.filename =
					uuid() +
					'-' +
					file.originalname.trim().replace(/\s/g, '_').toLowerCase();
				callback(null, true);
			}
		})
	)
	async createProduct(
		@UploadedFile(
			new ParseFilePipeBuilder()
				.addFileTypeValidator({
					fileType: '.(png|jpeg|jpg)'
				})
				.addMaxSizeValidator({
					maxSize: 1024 * 1024 * 4
				})
				.build({
					errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
				})
		)
		file: Express.Multer.File,
		@Body() dto: CreateProductDto
	) {
		return await this.productService.createProduct(dto, file);
	}

	@Get()
	async findByQuery(@Query() query?: QueryProductDto) {
		return await this.productService.findProductsByQuery(query);
	}

	@Get('count')
	async getCountProductsBySectionId(@Query() query: QueryProductDto) {
		return await this.productService.getCountOfProductByQuery(query)
	}

	@Get(':id')
	async findProductById(@Param('id') id: string) {
		return await this.productService.findOneProductById(id);
	}

}
