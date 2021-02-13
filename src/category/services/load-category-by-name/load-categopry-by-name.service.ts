import { LoadCategoryByNameRepository } from '@/category/repositories/load-category-by-name/load-category-by-name.repository';
import { Category } from '@/entities/category.entity';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class LoadCategoryByNameService {
  constructor(
    private readonly loadCategoryByNameRepository: LoadCategoryByNameRepository,
  ) {}

  async loadCategoryByName(name: string): Promise<Array<Category>> {
    const categories = await this.loadCategoryByNameRepository.loaByName(name);

    if (categories?.length === 0) {
      throw new NotFoundException('Category not found.');
    }

    return categories;
  }
}
