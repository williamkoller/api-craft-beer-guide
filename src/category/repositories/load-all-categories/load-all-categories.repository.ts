import { FilterCategoryDto } from '@/category/dtos/filter-category/filter-category.dto';
import { Category } from '@/entities/category.entity';
import { ResultWithPagination } from '@/shared/pagination/interfaces/result-with-pagination/result-with-pagination.intercafe';
import { PaginationService } from '@/shared/pagination/services/pagination.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LoadAllCategoriesRepository {
  constructor(
    @InjectRepository(Category)
    private readonly loadAllCategoriesRepository: Repository<Category>,
    private readonly paginationService: PaginationService,
  ) {}
  async loadAll(
    filterCategoryDto: FilterCategoryDto,
  ): Promise<ResultWithPagination<Array<Category>>> {
    const page = filterCategoryDto.page | 1;
    const limit = filterCategoryDto.limit | 1;

    const { search } = filterCategoryDto;

    const offSet = this.paginationService.calculateOffset(page, limit);

    const query = this.loadAllCategoriesRepository.createQueryBuilder(
      'categories',
    );

    if (search) {
      query.andWhere('categories.name ilike :name', { name: `%${search}%` });
    }
    query.orderBy('categories.ref', 'ASC').skip(offSet).take(limit);

    const [report, totalCount] = await query.getManyAndCount();

    const pagination = this.paginationService.buildPaginationObject({
      limit,
      offset: offSet,
      page,
      totalCount,
    });

    return {
      paged: pagination,
      result: report,
    };
  }
}
