import { User } from '@/entities/user.entity';
import { AddUserDto } from '@/user/dtos/add-user/add-user.dto';
import { AddUserRepository } from '@/user/repositories/add-user/add-user.repository';
import { ConflictException, Injectable } from '@nestjs/common';
import { LoadUserByEmailService } from '../load-user-by-email/load-user-by-email.service';

@Injectable()
export class AddUserService {
  constructor(
    private readonly addUserRepository: AddUserRepository,
    private readonly loadUserByEmailservice: LoadUserByEmailService,
  ) {}

  async add(addUserDto: AddUserDto): Promise<User> {
    const { email } = addUserDto;
    const user = await this.loadUserByEmailservice.loadUserByEmail(email);
    if (user) {
      throw new ConflictException(
        'There is already a record with a email for this user.',
      );
    }
    return await this.addUserRepository.addUser(addUserDto);
  }
}
