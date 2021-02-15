import { User } from '@/entities/user.entity';
import { AddUserDto } from '@/user/dtos/add-user/add-user.dto';
import { AddUserRepository } from '@/user/repositories/add-user/add-user.repository';
import { LoadUserByEmailRepository } from '@/user/repositories/load-user-by-email/load-user-by-email.repository';
import { ConflictException, Injectable } from '@nestjs/common';

@Injectable()
export class AddUserService {
  constructor(
    private readonly addUserRepository: AddUserRepository,
    private readonly loadUserByEmailRepository: LoadUserByEmailRepository,
  ) {}

  async add(addUserDto: AddUserDto): Promise<User> {
    const { email } = addUserDto;
    const user = await this.loadUserByEmailRepository.loadByEmail(email);
    if (user) {
      throw new ConflictException(
        'There is already a record with a email for this user.',
      );
    }
    return await this.addUserRepository.addUser(addUserDto);
  }
}
