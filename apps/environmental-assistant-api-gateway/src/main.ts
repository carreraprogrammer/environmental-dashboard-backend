import { NestFactory } from '@nestjs/core';
import { EnvironmentalAssistantApiGatewayModule } from './environmental-assistant-api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(EnvironmentalAssistantApiGatewayModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
