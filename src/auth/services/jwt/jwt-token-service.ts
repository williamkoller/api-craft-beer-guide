import { User } from '@/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtTokenService {
  constructor(private readonly jwtService: JwtService) {}

  async jwtToken(user: User): Promise<string> {
    const payload = {
      username: user.fullName,
      sub: user.id,
    };

    return this.jwtService.signAsync(payload);
  }
}
