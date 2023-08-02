import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModule } from '@nestjs/typeorm';

import { Size } from './size/entities/size.entity';
import { User } from './user/entities/user.entity';
import { Section } from './section/entities/section.entity';
import { Product } from './product/entities/product.entity';
import { Category } from './category/entities/category.entity';

import { AwsModule } from './aws/aws.module';
import { UserModule } from './user/user.module';
import { SizeModule } from './size/size.module';
import { AuthModule } from './auth/auth.module';
import { SectionModule } from './section/section.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';

@Module({
	imports: [
		ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => {
				return {
					type: configService.get('POSTGRES_TYPE'),
					host: configService.get('POSTGRES_HOST'),
					port: configService.get('POSTGRES_PORT'),
					username: configService.get('POSTGRES_USER'),
					password: configService.get('POSTGRES_PASSWORD'),
					database: configService.get('POSTGRES_DATABASE'),
					entities: [User, Section, Category, Product, Size],
					synchronize: true
				} as TypeOrmModuleAsyncOptions;
			}
		}),
		UserModule,
		AuthModule,
		AwsModule,
		SectionModule,
		CategoryModule,
		ProductModule,
		SizeModule
	],
	controllers: [],
	providers: [],
	exports: []
})
export class AppModule {}
