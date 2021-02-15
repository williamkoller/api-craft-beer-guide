import { User } from '@/entities/user.entity';
import { LoadUserByEmailRepository } from '@/user/repositories/load-user-by-email/load-user-by-email.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class LoadUserByEmailService {
  constructor(
    private readonly loadUserByEmailRepository: LoadUserByEmailRepository,
  ) {}

  async loadUserByEmail(email: string): Promise<User> {
    const user = await this.loadUserByEmailRepository.loadByEmail(email);
    if (!user) {
      throw new NotFoundException('User not found.');
    }
    return user;
  }
}
