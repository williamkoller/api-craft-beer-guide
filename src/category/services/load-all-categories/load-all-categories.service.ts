import { LoadAllCategoriesRepository } from '@/category/repositories/load-all-categories/load-all-categories.repository';
import { Category } from '@/entities/category.entity';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class LoaddAllCategoriesService {
  constructor(
    private readonly loadAllCategoriesRepository: LoadAllCategoriesRepository,
  ) {}

  async loadAllCategories(): Promise<Array<Category>> {
    const categories = await this.loadAllCategoriesRepository.loadAll();
    if (categories?.length === 0) {
      throw new NotFoundException('No records found.');
    }
    return categories;
  }
}
