import { Category } from '@/entities/category.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Category)
export class LoadCategoryByIdRepository extends Repository<Category> {
  async loadById(id: string): Promise<Category> {
    return await this.findOne(id);
  }
}
