import { User } from '@/entities/user.entity';
import { LoadUserByEmailService } from '@/user/services/load-user-by-email/load-user-by-email.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class ValidateUserService {
  constructor(
    private readonly loadUserByEmailService: LoadUserByEmailService,
  ) {}

  async validateUser(email: User['email']): Promise<User> {
    const user = await this.loadUserByEmailService.loadUserByEmail(email);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
