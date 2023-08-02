import { Injectable, NestMiddleware } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { Request, Response, NextFunction } from 'express';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class ParamsValidator implements NestMiddleware {
	async use(req: Request<{ id: string }>, res: Response, next: NextFunction) {
		const { id } = req.params;
		if (id.length !== 36)
			throw new NotFoundException(
				'Such id length does not correct. Please try again.'
			);
		const candidateById = await User.findOneBy({ id });
		if (!candidateById) {
			throw new NotFoundException(
				'The user with the provided id currently does not exist. Please choose another one.'
			);
		}
		next();
	}
}
