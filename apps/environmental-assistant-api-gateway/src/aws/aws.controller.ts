import { Controller, Get } from '@nestjs/common';
import { AwsService } from './aws.service';

@Controller('aws')
export class AwsController {
  constructor(private awsService: AwsService) { }

  @Get()
  getHello() {
    console.log('Received request for aws.getHello')
    return this.awsService.getHello();
  }

  @Get('getUploadUrl')
  getUploadUrl() {
    console.log('Received request for aws.getUploadUrl')
    return this.awsService.getUploadUrl();
  }
}
