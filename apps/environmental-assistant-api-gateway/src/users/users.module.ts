import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_CLIENT',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1', // Añade esto explícitamente
          port: 3001,
        }
      },
    ]),
  ]
})
export class UsersModule {
 
}
