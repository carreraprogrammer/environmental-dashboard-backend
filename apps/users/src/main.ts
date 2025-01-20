import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { UsersModule } from './users.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UsersModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1', // Añade esto explícitamente
        port: 3001,
      },
    },
  );
  await app.listen();
  console.log('Microservice Users is listening on 127.0.0.1:3001');
}
bootstrap();