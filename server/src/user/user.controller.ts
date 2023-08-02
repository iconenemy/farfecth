import {
	Controller,
	Post,
	Get,
	Body,
	Delete,
	Param,
	Put
} from '@nestjs/common';
import { UpdateUserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get()
	async findAll() {
		return await this.userService.findAll();
	}

	@Get(':id')
	async findOne(@Param('id') id: string) {
		return await this.userService.findById(id);
	}

	@Put(':id')
	async update(@Param('id') id: string, @Body() payload: UpdateUserDto) {
		await this.userService.updateById(id, payload);

		return await this.findOne(id);
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {
		await this.userService.deleteById(id);
		return { id };
	}
}
