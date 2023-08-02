import { Module } from '@nestjs/common';
import { S3Service } from './s3.service';
import { AWSController } from './aws.controller';

@Module({
  controllers: [AWSController],
  providers: [S3Service],
  exports: [S3Service]
})
export class AwsModule {}
