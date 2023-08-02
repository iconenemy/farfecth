import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete
} from '@nestjs/common';
import { SizeService } from './size.service';
import { CreateSizeDto, UpdateSizeDto } from './dto/size.dto';

@Controller('sizes')
export class SizeController {
    constructor(private readonly sizeService: SizeService) {}

    @Post()
    async createSize(@Body() dto: CreateSizeDto) {
        return await this.sizeService.createSize(dto);
    }

    @Get()
    async findAllSizes() {
        return await this.sizeService.findAllSizes();
    }

    @Get(':id')
    async findSizeById(@Param('id') id: string) {
        return await this.sizeService.findSizeById(id);
    }

    @Delete(':id')
    async deleteSizeById(@Param('id') id: string) {
        return await this.sizeService.deleteSizeById(id);
    }

    @Put(':id')
    async updateSizeById(@Param('id') id: string, @Body() dto: UpdateSizeDto) {
        return await this.sizeService.updateSizeById(id, dto);
    }
}
