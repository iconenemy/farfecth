import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { NotAcceptableException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'argon2';
import { RegisterDto, RegisterWithGoogleDto } from 'src/auth/dto/auth.dto';

import { UpdateUserDto } from './dto/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>
	) {}

	findByEmail(email: string): Promise<User> {
		return this.userRepository.findOneBy({ email });
	}

	findByGoogleId(google_id: string): Promise<User> {
		return this.userRepository.findOneBy({ google_id });
	}

	findByPhone(phone_number: string): Promise<User> {
		return this.userRepository.findOneBy({ phone_number });
	}

	findAll(): Promise<User[]> {
		return this.userRepository.find({
			select: {
				id: true,
				first_name: true,
				last_name: true,
				email: true,
				phone_number: true,
				is_active: true,
				role: true
			},
			order: {
				id: 'ASC'
			},
			take: 10,
			where: {
				role: 'guest'
			}
		});
	}

	findById(id: string): Promise<User> {
		return this.userRepository.findOne({ 
			where: { 
				id 
			}, 
			select: { 
				id: true,
				first_name: true,
				last_name: true,
				email: true,
				phone_number: true,
				is_active: true,
				role: true
			} 
		});
	}

	async create(payload: RegisterDto): Promise<User> {
		const { email, phone_number, password } = payload;

		const userByEmail = await this.findByEmail(email);
		if (userByEmail) {
			throw new NotAcceptableException(
				'The account with the provided email currently exists. Please choose another one.'
			);
		}

		const userByPhone = await this.findByPhone(phone_number);
		if (userByPhone) {
			throw new NotAcceptableException(
				'The account with the provided phone number currently exists. Please choose another one.'
			);
		}

		const hashedPassword = await hash(password);

		return this.userRepository.save(
			this.userRepository.create({ ...payload, password: hashedPassword })
		);
	}

	async createWithGoogle(payload: RegisterWithGoogleDto): Promise<User> {
		const { email, google_id } = payload;

		const userByEmail = await this.findByEmail(email);
		if (userByEmail) {
			throw new NotAcceptableException(
				'The account with the provided email currently exists. Please choose another one.'
			);
		}

		const userByGoogleId = await this.findByGoogleId(google_id);
		if (userByGoogleId) {
			throw new NotAcceptableException(
				'The account with the provided email currently exists. Please choose another one.'
			);
		}

		const hashedPassword = await hash(google_id);

		return this.userRepository.save(
			this.userRepository.create({ ...payload, password: hashedPassword })
		);
	}

	async deleteById(id: string): Promise<DeleteResult> {
		return this.userRepository.delete({ id });
	}

	async updateById(id: string, payload: UpdateUserDto): Promise<UpdateResult> {
		return this.userRepository.update(id, { ...payload });
	}

	async updateHashedToken(
		id: string,
		hashedToken: string
	): Promise<UpdateResult> {
		return this.userRepository.update(id, { hashedToken });
	}
}
