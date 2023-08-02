import { Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class S3Service {
	private readonly bucket: string =
		this.configService.get<string>('AWS_S3_BUCKET');
	private readonly region: string =
		this.configService.getOrThrow<string>('AWS_S3_REGION');

	private readonly s3: S3Client = new S3Client({
		credentials: {
			accessKeyId:
				this.configService.getOrThrow<string>('AWS_ACCESS_KEY_ID'),
			secretAccessKey: this.configService.getOrThrow<string>(
				'AWS_SECRET_ACCESS_KEY'
			)
		},
		region: this.region
	});

	constructor(private configService: ConfigService) {}
	async upload(file: Buffer, fileName: string): Promise<string> {
		try {
			await this.s3.send(
				new PutObjectCommand({
					Bucket: this.bucket,
					Body: file,
					Key: fileName,
					ACL: 'public-read',
					ContentType: 'image/jpeg'
				})
			);
		} catch (error) {
			throw new Error(error);
		}
		return `https://${this.bucket}.s3.${this.region}.amazonaws.com/${fileName}`;
	}
}
