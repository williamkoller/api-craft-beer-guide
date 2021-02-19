import { FilterCategoryDto } from '@/category/dtos/filter-category/filter-category.dto';
import { LoadAllCategoriesRepository } from '@/category/repositories/load-all-categories/load-all-categories.repository';
import { Category } from '@/entities/category.entity';
import { ResultWithPagination } from '@/shared/pagination/interfaces/result-with-pagination/result-with-pagination.interface';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class LoadAllCategoriesService {
  constructor(
    private readonly loadAllCategoriesRepository: LoadAllCategoriesRepository,
  ) {}

  async loadAllCategories(
    filterCategoryDto: FilterCategoryDto,
  ): Promise<ResultWithPagination<Category[]>> {
    const categories = await this.loadAllCategoriesRepository.loadAll(
      filterCategoryDto,
    );
    if (categories.result?.length === 0) {
      throw new NotFoundException('No records found.');
    }
    return categories;
  }
}
