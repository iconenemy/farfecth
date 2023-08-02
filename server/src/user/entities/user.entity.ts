import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

import { UserRoleType } from '../types/user.type';

@Entity({ name: 'user' })
export class User extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	first_name: string;

	@Column({ nullable: true })
	last_name: string;

	@Column({ unique: true })
	email: string;

	@Column()
	password: string;

	@Column({ unique: true, nullable: true })
	phone_number: string;

	@Column({ default: true })
	is_active: boolean;

	@Column({
		type: 'enum',
		enum: ['admin', 'moderator', 'guest'],
		default: 'guest'
	})
	role: UserRoleType;

	@Column({nullable: true})
	google_id: string;

	@Column({ nullable: true })
	hashedToken: string;
}
