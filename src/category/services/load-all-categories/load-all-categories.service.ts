import { LoadAllCategoriesRepository } from '@/category/repositories/load-all-categories/load-all-categories.repository';
import { Category } from '@/entities/category.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LoaddAllCategoriesService {
  constructor(
    private readonly loadAllCategoriesRepository: LoadAllCategoriesRepository,
  ) {}

  async loadAllCategories(): Promise<Array<Category>> {
    return await this.loadAllCategoriesRepository.loadAll();
  }
}
