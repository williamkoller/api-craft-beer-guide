import { User } from '@/entities/user.entity';
import { LoadAllUsersRepository } from '@/user/repositories/load-all-users/load-all-users.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class LoadAllUsersService {
  constructor(
    private readonly loadAllUsersRepository: LoadAllUsersRepository,
  ) {}

  async loadAllUsers(): Promise<User[]> {
    const users = await this.loadAllUsersRepository.loadAllUsers();
    if (users?.length === 0) {
      throw new NotFoundException('No records found.');
    }
    return users;
  }
}
