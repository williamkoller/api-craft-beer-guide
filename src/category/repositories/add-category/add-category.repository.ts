import { AddCategoryDto } from '@/category/dtos/add-categroy/add-category.dto';
import { Category } from '@/entities/category.entity';
import { validateOrReject } from 'class-validator';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Category)
export class AddCategoryRepository extends Repository<Category> {
  async addCategory(addCategoryDto: AddCategoryDto): Promise<Category> {
    const categoryCreated = this.create(addCategoryDto);
    validateOrReject(addCategoryDto);
    return await this.save(categoryCreated);
  }
}
