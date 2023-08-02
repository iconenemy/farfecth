import { UserRoleType } from '../../user/types/user.type';

export interface IJwtPayload {
	id: string;
	email: string;
	role: UserRoleType;
}
