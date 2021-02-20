import { User } from '@/entities/user.entity';
import { ReturnResponseMessageType } from '@/utils/types/return-message/return-response-message.type';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class DeleteUserRepository extends Repository<User> {
  async deleteUser(id: string): Promise<ReturnResponseMessageType> {
    await this.delete(id);
    return {
      message: 'User deleted with sucessfully.',
    };
  }
}
