import { Module, forwardRef } from '@nestjs/common';
import { SectionService } from './section.service';
import { SectionController } from './section.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Section } from './entities/section.entity';
import { CategoryModule } from 'src/category/category.module';

@Module({
	imports: [
		TypeOrmModule.forFeature([Section]),
		forwardRef(() => CategoryModule)
	],
	controllers: [SectionController],
	providers: [SectionService],
	exports: [SectionService]
})
export class SectionModule {}
