import { Module } from '@nestjs/common';
import { CryptHashEncrypt } from '@/shared/crypt-hash/crypt-hash-encrypt/crypt-hash-encrypt';
import { ValidateUserService } from '@/auth/services/validate-user/validate-user.service';
import { LoadUserByEmailService } from '@/user/services/load-user-by-email/load-user-by-email.service';

@Module({
  providers: [CryptHashEncrypt, ValidateUserService, LoadUserByEmailService],
})
export class AuthModule {}
