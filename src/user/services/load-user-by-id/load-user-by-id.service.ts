import { User } from '@/entities/user.entity';
import { LoadUserByIdRepository } from '@/user/repositories/load-user-by-id/load-user-by-id.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class LoadUserByIdService {
  constructor(
    private readonly loadUserByIdRepository: LoadUserByIdRepository,
  ) {}

  async loadUserById(id: string): Promise<User> {
    const userId = await this.loadUserByIdRepository.loadById(id);
    if (!userId) {
      throw new NotFoundException('User not found.');
    }
    return userId;
  }
}
