import { DeleteCategoryRepository } from '@/category/repositories/delete-category/delete-category.repository';
import { ReturnResponseMessageType } from '@/utils/types/return-message/return-response-message.type';
import { Injectable } from '@nestjs/common';
import { LoadCategoryByIdService } from '../load-category-by-id/load-category-by-id.service';

@Injectable()
export class DeleteCategoryService {
  constructor(
    private readonly deleteCategoryRepository: DeleteCategoryRepository,
    private readonly loadCategoryByIdService: LoadCategoryByIdService,
  ) {}

  async deleteCategory(id: string): Promise<ReturnResponseMessageType> {
    await this.loadCategoryByIdService.loadCategoryById(id);
    return await this.deleteCategoryRepository.DeleteCategory(id);
  }
}
