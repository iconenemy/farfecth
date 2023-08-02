import { Module, forwardRef } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { SectionModule } from 'src/section/section.module';

@Module({
	imports: [
		TypeOrmModule.forFeature([Category]),
		forwardRef(() => SectionModule),
	],
	controllers: [CategoryController],
	exports: [CategoryService],
	providers: [CategoryService]
})
export class CategoryModule {}
