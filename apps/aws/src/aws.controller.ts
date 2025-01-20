import { Controller, Get } from '@nestjs/common';
import { AwsService } from './aws.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AwsController {
  constructor(private readonly awsService: AwsService) {}

  @MessagePattern('aws.getHello')
  getHello() {
    return this.awsService.getHello();
  }
}
