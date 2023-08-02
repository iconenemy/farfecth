import { Injectable, NotAcceptableException } from '@nestjs/common';
import { CreateSizeDto, UpdateSizeDto } from './dto/size.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Size } from './entities/size.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { SizeType } from './type/size.type';

@Injectable()
export class SizeService {
	constructor(
		@InjectRepository(Size)
		private readonly sizeRepository: Repository<Size>
	) {}

	findAllSizes(): Promise<Size[]> {
		return this.sizeRepository.find();
	}

	findSizeById(id: string) {
		return this.sizeRepository.findOneBy({ id });
	}

	private findSizeBySizeName(size: SizeType): Promise<Size> {
		return this.sizeRepository.findOne({ where: { size } });
	}

	async createSize(payload: CreateSizeDto): Promise<Size> {
		const { size } = payload;
		const sizeBySizeName = await this.findSizeBySizeName(size);
		if (sizeBySizeName)
			throw new NotAcceptableException(
				'The size with the provided name currently exists. Please choose another one.'
			);

		return this.sizeRepository.save(
			this.sizeRepository.create({ ...payload })
		);
	}

	updateSizeById(id: string, payload: UpdateSizeDto): Promise<UpdateResult> {
		return this.sizeRepository.update(id, { ...payload });
	}

	deleteSizeById(id: string): Promise<DeleteResult> {
		return this.sizeRepository.delete(id);
	}
}
