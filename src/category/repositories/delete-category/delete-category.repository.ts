import { Category } from '@/entities/category.entity';
import { ReturnResponseMessageType } from '@/utils/types/return-message/return-response-message.type';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Category)
export class DeleteCategoryRepository extends Repository<Category> {
  async DeleteCategory(id: string): Promise<ReturnResponseMessageType> {
    await this.delete(id);
    return {
      message: 'Category deleted with successfully.',
    };
  }
}
