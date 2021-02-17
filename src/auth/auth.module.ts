import { Module } from '@nestjs/common';
import { ValidateUserService } from '@/auth/services/validate-user/validate-user.service';
import { LoadUserByEmailService } from '@/user/services/load-user-by-email/load-user-by-email.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoadUserByEmailRepository } from '@/user/repositories/load-user-by-email/load-user-by-email.repository';
import { JwtTokenService } from '@/auth/services/jwt/jwt-token-service';
import { CryptHashCompare } from '@/shared/crypt-hash/crypt-hash-compare/crypt-hash-compare';
import { User } from '@/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '@/auth/strategy/jwt/jwt.strategy';
import { AuthLoginController } from '@/auth/controllers/auth-login/auth-login.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, LoadUserByEmailRepository]),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: '1d',
        },
      }),
    }),
  ],
  providers: [
    CryptHashCompare,
    ValidateUserService,
    LoadUserByEmailService,
    JwtTokenService,
    JwtStrategy,
  ],
  controllers: [AuthLoginController],
})
export class AuthModule {}
