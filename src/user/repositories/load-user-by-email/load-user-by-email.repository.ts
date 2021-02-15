import { User } from '@/entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class LoadUserByEmailRepository extends Repository<User> {
  async loadByEmail(email: string): Promise<User> {
    return await this.findOne({ email });
  }
}
