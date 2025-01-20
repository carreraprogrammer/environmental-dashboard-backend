import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @MessagePattern('users.getAll')
  getUsers() {
    return this.usersService.getUsers();
  }
}
