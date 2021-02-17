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
import { LoadUserByIdService } from '@/user/services/load-user-by-id/load-user-by-id.service';
import { LoadUserByIdRepository } from '@/user/repositories/load-user-by-id/load-user-by-id.repository';
import { LoadUserService } from '@/user/services/load-user/load-user.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      LoadUserByEmailRepository,
      LoadUserByIdRepository,
    ]),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: '60s',
        },
      }),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [
    CryptHashCompare,
    ValidateUserService,
    LoadUserByEmailService,
    LoadUserByIdService,
    JwtTokenService,
    JwtStrategy,
    LoadUserService,
  ],
  controllers: [AuthLoginController],
})
export class AuthModule {}
