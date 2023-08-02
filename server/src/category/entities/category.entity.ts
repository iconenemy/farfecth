import { Product } from 'src/product/entities/product.entity';
import { Section } from 'src/section/entities/section.entity';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, OneToMany } from 'typeorm';

@Entity({ name: 'category' })
export class Category extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	category_name: string;

    @ManyToMany(() => Section, section => section.category)
    section: Section[]

	@OneToMany(() => Product, (product) => product.category)
	product: Product[]
}
