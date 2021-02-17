import { User } from '@/entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddUserRepository } from '@/user/repositories/add-user/add-user.repository';
import { AddUserService } from '@/user/services/add-user/add-user.service';
import { AddUserController } from '@/user/controllers/add-user/add-user.controller';
import { CryptHashEncrypt } from '@/shared/crypt-hash/crypt-hash-encrypt/crypt-hash-encrypt';
import { CryptHashCompare } from '@/shared/crypt-hash/crypt-hash-compare/crypt-hash-compare';
import { UpdateUserRepository } from '@/user/repositories/update-user/update-user.repository';
import { LoadUserByIdRepository } from '@/user/repositories/load-user-by-id/load-user-by-id.repository';
import { UpdateUserService } from '@/user/services/update-user/update-user.service';
import { UpdateUserController } from '@/user/controllers/update-user/update-user.controller';
import { LoadUserByEmailRepository } from '@/user/repositories/load-user-by-email/load-user-by-email.repository';
import { LoadUserByEmailService } from '@/user/services/load-user-by-email/load-user-by-email.service';
import { LoadAllUsersRepository } from '@/user/repositories/load-all-users/load-all-users.repository';
import { LoadAllUsersService } from '@/user/services/load-all-users/load-all-users.service';
import { LoadAllUsersController } from '@/user/controllers/load-all-users/load-all-ussers.controller';
import { LoadUserByIdService } from '@/user/services/load-user-by-id/load-user-by-id.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      LoadUserByIdRepository,
      LoadUserByEmailRepository,
      LoadAllUsersRepository,
    ]),
  ],
  providers: [
    AddUserService,
    CryptHashEncrypt,
    CryptHashCompare,
    AddUserRepository,
    UpdateUserRepository,
    UpdateUserService,
    LoadUserByEmailService,
    LoadAllUsersService,
    LoadUserByIdService,
  ],
  controllers: [
    AddUserController,
    UpdateUserController,
    LoadAllUsersController,
  ],
  exports: [LoadUserByEmailService],
})
export class UserModule {}
