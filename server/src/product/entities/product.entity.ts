import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	JoinTable,
	ManyToMany,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';

import { Size } from 'src/size/entities/size.entity';
import { Category } from 'src/category/entities/category.entity';
import { Section } from 'src/section/entities/section.entity';

@Entity({ name: 'product' })
export class Product extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@Column({ type: 'money' })
	price: number;

	@Column()
	color: string;

	@Column({ nullable: true })
	description: string;

	@Column()
	image: string;

	@Column({ default: true })
	in_stock: boolean;

	@ManyToOne(() => Category, category => category.product)
	category: Category;

	@ManyToOne(() => Section, section => section.product)
	section: Section;

	@ManyToMany(() => Size, size => size.product)
	@JoinTable()
	size: Size[];

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}
