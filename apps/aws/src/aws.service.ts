import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';

@Injectable()
export class AwsService {
  getHello(): string {
    return 'Hello World!';
  }

  getUploadUrl(): string {
    const region = process.env.AWS_BUCKET_REGION;
    const accessKey = process.env.AWS_ACCESS_KEY;
    const secretKey = process.env.AWS_SECRET_KEY;

    const s3 = new S3({
      region,
      accessKeyId: accessKey,
      secretAccessKey: secretKey,
    });

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: 'test.txt',
      ContentType: 'text/plain',
    };

    return s3.getSignedUrl('putObject', params);
  }
}
