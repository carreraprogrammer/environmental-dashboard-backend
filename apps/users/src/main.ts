import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { Transport } from '@nestjs/microservices';
import { AwsModule } from 'apps/aws/src/aws.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AwsModule, {
    transport: Transport.TCP,
    options: {
      port: 3001,
    },
  });
}
bootstrap();
