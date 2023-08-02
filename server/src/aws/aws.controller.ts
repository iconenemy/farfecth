import { Controller, HttpStatus, ParseFilePipeBuilder, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { S3Service } from './s3.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { v4 as uuid } from 'uuid'

@Controller('aws')
export class AWSController {
    constructor(private readonly s3Service: S3Service) {}

    @Post('upload')
	@UseInterceptors(
		FileInterceptor('file', {
			fileFilter: (
				req: any,
				file: Express.Multer.File,
				callback: (error: Error | null, acceptFile: boolean) => void
			): void => {
				file.filename =
					uuid() +
					'-' +
					file.originalname.trim().replace(/\s/g, '_').toLowerCase();
				callback(null, true);
			}
		})
	)
	async uploudImage(
		@UploadedFile(
			new ParseFilePipeBuilder()
				.addFileTypeValidator({
					fileType: '.(png|jpeg|jpg)'
				})
				.addMaxSizeValidator({
					maxSize: 1024 * 1024 * 4
				})
				.build({
					errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
				})
		)
		file: Express.Multer.File
	) {
		const { buffer, filename } = file;
		return this.s3Service.upload(buffer, filename);
	}
}