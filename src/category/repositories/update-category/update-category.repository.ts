import { UpdateCategoryDto } from '@/category/dtos/update-category/update-category.dto';
import { Category } from '@/entities/category.entity';
import { ReturnResponseMessageType } from '@/utils/types/return-message/return-response-message.type';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Category)
export class UpdateCategoryRepository extends Repository<Category> {
  async updateCategory(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<ReturnResponseMessageType> {
    await this.update(id, updateCategoryDto);
    return {
      message: 'Category updated successfully.',
    };
  }
}
