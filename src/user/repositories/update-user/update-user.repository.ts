import { User } from '@/entities/user.entity';
import { CryptHashEncrypt } from '@/shared/crypt-hash/crypt-hash-encrypt/crypt-hash-encrypt';
import { UpdateUserDto } from '@/user/dtos/update-user/update-user.dto';
import { ReturnResponseMessageType } from '@/utils/types/return-message/return-response-message.type';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UpdateUserRepository {
  constructor(
    @InjectRepository(User)
    private readonly updateUserRepository: Repository<User>,
    private readonly cryptHashEncrypt: CryptHashEncrypt,
  ) {}

  async updateUser(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<ReturnResponseMessageType> {
    const { password } = updateUserDto;
    const updatedUser = {
      ...updateUserDto,
      password: await this.cryptHashEncrypt.encrypt(password),
    };
    await this.updateUserRepository.update(id, { ...updatedUser });
    return {
      message: 'User updated with successfully.',
    };
  }
}
