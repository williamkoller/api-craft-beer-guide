import { User } from '@/entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddUserRepository } from '@/user/repositories/add-user/add-user.repository';
import { AddUserService } from '@/user/services/add-user/add-user.service';
import { AddUserController } from '@/user/controllers/add-user/add-user.controller';
import { CryptHashEncrypt } from '@/shared/crypt-hash/crypt-hash-encrypt/crypt-hash-encrypt';
import { CryptHashCompare } from '@/shared/crypt-hash/crypt-hash-compare/crypt-hash-compare';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    AddUserService,
    CryptHashEncrypt,
    CryptHashCompare,
    AddUserRepository,
  ],
  controllers: [AddUserController],
})
export class UserModule {}
