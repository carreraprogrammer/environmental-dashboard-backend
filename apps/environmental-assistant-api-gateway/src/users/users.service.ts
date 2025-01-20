import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_CLIENT') private usersClient: ClientProxy) {}
  async getUsers() { 
    console.log('Received request for users.getAll');
    try {
      return await lastValueFrom(this.usersClient.send('users.getAll', {}));
    } catch (error) {
      console.error('Error fetching users:', error);
      throw new Error('Could not fetch users');
    }
  }
}
