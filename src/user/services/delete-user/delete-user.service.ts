import { DeleteUserRepository } from '@/user/repositories/delete-user/delete-user.repository';
import { ReturnResponseMessageType } from '@/utils/types/return-message/return-response-message.type';
import { Injectable } from '@nestjs/common';
import { LoadUserByIdService } from '../load-user-by-id/load-user-by-id.service';

@Injectable()
export class DeleteUserService {
  constructor(
    private readonly deleteUserRepository: DeleteUserRepository,
    private readonly loadUserByIdService: LoadUserByIdService,
  ) {}

  async deleteUser(id: string): Promise<ReturnResponseMessageType> {
    await this.loadUserByIdService.loadUserById(id);
    return await this.deleteUserRepository.deleteUser(id);
  }
}
