import { User } from '@/entities/user.entity';
import { CryptHashEncrypt } from '@/shared/crypt-hash/crypt-hash-encrypt/crypt-hash-encrypt';
import { AddUserDto } from '@/user/dtos/add-user/add-user.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validateOrReject } from 'class-validator';
import { Repository } from 'typeorm';

@Injectable()
export class AddUserRepository {
  constructor(
    @InjectRepository(User)
    private readonly addUserRepository: Repository<User>,
    private readonly cryptHashEncrypt: CryptHashEncrypt,
  ) {}
  async addUser(addUserDto: AddUserDto): Promise<User> {
    const user = Object.assign({} as User, addUserDto);
    const userCreated = this.addUserRepository.create({
      fullName: user.fullName,
      email: user.email,
      password: await this.cryptHashEncrypt.encrypt(user.password),
    });
    validateOrReject(userCreated);
    return await this.addUserRepository.save(userCreated);
  }
}
