import { UpdateUserDto } from '@/user/dtos/update-user/update-user.dto';
import { LoadUserByIdRepository } from '@/user/repositories/load-user-by-id/load-user-by-id.repository';
import { UpdateUserRepository } from '@/user/repositories/update-user/update-user.repository';
import { ReturnResponseMessageType } from '@/utils/types/return-message/return-response-message.type';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UpdateUserService {
  constructor(
    private readonly loadUserByIdRepository: LoadUserByIdRepository,
    private readonly updateUserRepository: UpdateUserRepository,
  ) {}

  async updateUser(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<ReturnResponseMessageType> {
    const userFound = await this.loadUserByIdRepository.loadById(id);
    if (!userFound) {
      throw new NotFoundException('User not found.');
    }
    return await this.updateUserRepository.updateUser(
      userFound.id,
      updateUserDto,
    );
  }
}
