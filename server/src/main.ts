import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

const bootstrap = async () => {
	try {
		const PORT = process.env.PORT;

		const appOtions = { cors: {
			origin: true,
			credentials: true,
		} };

		const app = await NestFactory.create(AppModule, appOtions);
		app.use(cookieParser());
		app.setGlobalPrefix('api');
		app.useGlobalPipes(new ValidationPipe({ forbidUnknownValues: true }));

		await app.listen(PORT, () =>
			console.log(`Server has been started on port ${PORT}`)
		);
	} catch (error) {
		console.log(error);
	}
};

bootstrap();
