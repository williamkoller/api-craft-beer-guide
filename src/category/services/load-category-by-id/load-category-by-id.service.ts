import { LoadCategoryByIdRepository } from '@/category/repositories/load-category-by-id/load-category-by-id.repository';
import { Category } from '@/entities/category.entity';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class LoadCategoryByIdService {
  constructor(
    private readonly loadCategoryByIdRepository: LoadCategoryByIdRepository,
  ) {}
  async loadCategoryById(id: string): Promise<Category> {
    const category = await this.loadCategoryByIdRepository.loadById(id);
    if (!category) {
      throw new NotFoundException('Category not found.');
    }
    return category;
  }
}
