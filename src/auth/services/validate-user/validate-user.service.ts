import { AuthUserDto } from '@/auth/dtos/auth-user/auth-user.dto';
import { ReturnUserDto } from '@/auth/dtos/return-user/return-user.dto';
import { CryptHashCompare } from '@/shared/crypt-hash/crypt-hash-compare/crypt-hash-compare';
import { LoadUserByEmailService } from '@/user/services/load-user-by-email/load-user-by-email.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtTokenService } from '../jwt/jwt-token-service';

@Injectable()
export class ValidateUserService {
  constructor(
    private readonly loadUserByEmailService: LoadUserByEmailService,
    private readonly cryptHashCompare: CryptHashCompare,
    private readonly jwtTokenService: JwtTokenService,
  ) {}

  async validateUser(data: AuthUserDto): Promise<ReturnUserDto> {
    const user = await this.loadUserByEmailService.loadUserByEmail(data.email);
    if (!user) {
      throw new UnauthorizedException();
    }

    const validPassword = await this.cryptHashCompare.compare(
      data.password,
      user.password,
    );

    if (!validPassword) {
      throw new UnauthorizedException('Incorrect password or email.');
    }

    delete user.password;

    return {
      user,
      token: await this.jwtTokenService.jwtToken(user),
    };
  }
}
