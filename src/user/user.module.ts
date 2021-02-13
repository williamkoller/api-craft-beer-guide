import { User } from '@/entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddUserRepository } from '@/user/repositories/add-user/add-user.repository';
import { AddUserService } from '@/user/services/add-user/add-user.service';
import { AddUserController } from '@/user/controllers/add-user/add-user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, AddUserRepository])],
  providers: [AddUserService],
  controllers: [AddUserController],
})
export class UserModule {}
