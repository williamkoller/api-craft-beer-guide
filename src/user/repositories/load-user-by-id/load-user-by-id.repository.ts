import { User } from '@/entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class LoadUserByIdRepository extends Repository<User> {
  async loadById(id: string): Promise<User> {
    return await this.findOne(id);
  }
}
