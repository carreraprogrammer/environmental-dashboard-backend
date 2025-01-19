import { Module } from '@nestjs/common';
import { EnvironmentalAssistantApiGatewayController } from './environmental-assistant-api-gateway.controller';
import { EnvironmentalAssistantApiGatewayService } from './environmental-assistant-api-gateway.service';
import { UsersModule } from './users/users.module';
import { AwsModule } from './aws/aws.module';

@Module({
  imports: [UsersModule, AwsModule],
  controllers: [EnvironmentalAssistantApiGatewayController],
  providers: [EnvironmentalAssistantApiGatewayService],
})
export class EnvironmentalAssistantApiGatewayModule {}
