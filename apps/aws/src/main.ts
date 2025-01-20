import { NestFactory } from '@nestjs/core';
import { AwsModule } from './aws.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AwsModule, {
    transport: Transport.TCP,
    options: {
      port: 3002,
    },
  });

  await app.listen();
}
bootstrap();
