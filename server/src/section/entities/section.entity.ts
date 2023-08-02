import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	ManyToMany,
	JoinTable,
	OneToMany
} from 'typeorm';

import { Product } from 'src/product/entities/product.entity';
import { Category } from 'src/category/entities/category.entity';

@Entity({ name: 'section' })
export class Section extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	section_name: string;

	@ManyToMany(() => Category, category => category.section)
	@JoinTable()
	category: Category[];

	@OneToMany(() => Product, product => product.section)
	product: Product[];
}
