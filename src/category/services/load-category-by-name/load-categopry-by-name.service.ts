import { LoadCategoryByNameRepository } from '@/category/repositories/load-category-by-name/load-category-by-name.repository';
import { Category } from '@/entities/category.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LoadCategoryByNameService {
  constructor(
    private readonly loadCategoryByNameRepository: LoadCategoryByNameRepository,
  ) {}

  async loadCategoryByName(name: string): Promise<Array<Category>> {
    return await this.loadCategoryByNameRepository.loaByName(name);
  }
}
