import {
	BaseEntity,
	Column,
	Entity,
	ManyToMany,
	PrimaryGeneratedColumn
} from 'typeorm';

import { SizeType } from '../type/size.type';
import { Product } from 'src/product/entities/product.entity';

@Entity({ name: 'size' })
export class Size extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({
		type: 'enum',
		enum: ['xs', 's', 'm', 'l', 'xl', 'xxl']
	})
	size: SizeType;

	@ManyToMany(() => Product, product => product.size)
	product: Product[];
}
