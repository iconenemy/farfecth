import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModule } from '@nestjs/typeorm';

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
					entities: [],
					synchronize: true,
					keepConnectionAlive: true
				} as TypeOrmModuleAsyncOptions;
			}
		}),
	],
	controllers: [],
	providers: [],
	exports: []
})
export class AppModule {}
