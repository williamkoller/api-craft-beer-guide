import { User } from '@/entities/user.entity';
import { AddUserDto } from '@/user/dtos/add-user/add-user.dto';
import { validateOrReject } from 'class-validator';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class AddUserRepository extends Repository<User> {
  async addUser(addUserDto: AddUserDto): Promise<User> {
    const user = Object.assign({} as User, addUserDto);
    validateOrReject(user);
    return await this.save(user);
  }
}
