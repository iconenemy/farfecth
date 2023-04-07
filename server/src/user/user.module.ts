import {
	MiddlewareConsumer,
	Module,
	NestModule,
	RequestMethod
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './user.service';
import { UserController } from './user.controller';

import { User } from './entities/user.entity';
import { ParamsValidator } from 'src/middlewares/params.validator';

@Module({
	imports: [TypeOrmModule.forFeature([User])],
	controllers: [UserController],
	providers: [UserService],
	exports: [UserService]
})
export class UserModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(ParamsValidator)
			.forRoutes(
				{ path: 'users/:id', method: RequestMethod.DELETE },
				{ path: 'users/:id', method: RequestMethod.GET },
				{ path: 'users/:id', method: RequestMethod.PUT }
			);
	}
}
