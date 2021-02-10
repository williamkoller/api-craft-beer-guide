import { Category } from '@/entities/category.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Category)
export class LoadAllCategoriesRepository extends Repository<Category> {
  async loadAll(): Promise<Array<Category>> {
    return await this.find();
  }
}
