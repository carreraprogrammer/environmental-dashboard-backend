import { Controller, Get } from '@nestjs/common';
import { EnvironmentalAssistantApiGatewayService } from './environmental-assistant-api-gateway.service';

@Controller()
export class EnvironmentalAssistantApiGatewayController {
  constructor(private readonly environmentalAssistantApiGatewayService: EnvironmentalAssistantApiGatewayService) {}

  @Get()
  getHello(): string {
    return this.environmentalAssistantApiGatewayService.getHello();
  }
}
