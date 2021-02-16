import { User } from '@/entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class LoadAllUsersRepository extends Repository<User> {
  async loadAllUsers(): Promise<User[]> {
    return await this.find();
  }
}
