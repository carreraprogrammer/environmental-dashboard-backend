import { Injectable } from '@nestjs/common';

@Injectable()
export class EnvironmentalAssistantApiGatewayService {
  getHello(): string {
    return 'Hello World!';
  }
}
