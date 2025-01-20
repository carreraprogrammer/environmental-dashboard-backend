import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AwsService {
  constructor(@Inject('AWS_CLIENT') private awsClient: ClientProxy) {}

  async getHello() {
    try {
      return await lastValueFrom(this.awsClient.send('aws.getHello', {}));
    } catch (error) {
      console.error('Error fetching aws:', error);
      throw new Error('Could not fetch aws');
    }
  }
}
