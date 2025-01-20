import { Module } from '@nestjs/common';
import { AwsService } from './aws.service';
import { AwsController } from './aws.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  providers: [AwsService],
  controllers: [AwsController],
  imports: [
    ClientsModule.register([
      {
        name: 'AWS_CLIENT',
        transport: Transport.TCP,
        options: {
          port: 3002,
        },
      },
    ]),
  ],
})
export class AwsModule {}
