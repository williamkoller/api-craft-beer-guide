import { Category } from '@/entities/category.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Category)
export class LoadCategoryByNameRepository extends Repository<Category> {
  async loaByName(name: string): Promise<Array<Category>> {
    return await this.createQueryBuilder('categories')
      .where('(categories.name ilike :name)', { name: `%${name}%` })
      .getMany();
  }
}
