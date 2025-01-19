import { Test, TestingModule } from '@nestjs/testing';
import { EnvironmentalAssistantApiGatewayController } from './environmental-assistant-api-gateway.controller';
import { EnvironmentalAssistantApiGatewayService } from './environmental-assistant-api-gateway.service';

describe('EnvironmentalAssistantApiGatewayController', () => {
  let environmentalAssistantApiGatewayController: EnvironmentalAssistantApiGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EnvironmentalAssistantApiGatewayController],
      providers: [EnvironmentalAssistantApiGatewayService],
    }).compile();

    environmentalAssistantApiGatewayController = app.get<EnvironmentalAssistantApiGatewayController>(EnvironmentalAssistantApiGatewayController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(environmentalAssistantApiGatewayController.getHello()).toBe('Hello World!');
    });
  });
});
