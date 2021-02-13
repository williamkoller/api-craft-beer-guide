import { UpdateCategoryDto } from '@/category/dtos/update-category/update-category.dto';
import { UpdateCategoryRepository } from '@/category/repositories/update-category/update-category.repository';
import { ReturnResponseMessageType } from '@/utils/types/return-message/return-response-message.type';
import { Injectable } from '@nestjs/common';
import { LoadCategoryByIdService } from '../load-category-by-id/load-category-by-id.service';

@Injectable()
export class UpdateCategoryService {
  constructor(
    private readonly updateCategoryRepoisitory: UpdateCategoryRepository,
    private readonly loadCategoryByIdService: LoadCategoryByIdService,
  ) {}

  async updateCategory(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<ReturnResponseMessageType> {
    await this.loadCategoryByIdService.loadCategoryById(id);
    return await this.updateCategoryRepoisitory.updateCategory(
      id,
      updateCategoryDto,
    );
  }
}
