import { User } from '@/entities/user.entity';
import { AddUserDto } from '@/user/dtos/add-user/add-user.dto';
import { AddUserRepository } from '@/user/repositories/add-user/add-user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddUserService {
  constructor(private readonly addUserRepository: AddUserRepository) {}

  async add(addUserDto: AddUserDto): Promise<User> {
    return await this.addUserRepository.addUser(addUserDto);
  }
}
