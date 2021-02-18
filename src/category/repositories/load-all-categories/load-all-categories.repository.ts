import { FilterCategoryDto } from '@/category/dtos/filter-category/filter-category.dto';
import { Category } from '@/entities/category.entity';
import { ResultWithPagination } from '@/shared/pagination/interfaces/result-with-pagination/result-with-pagination.interface';
import { CalculateOffSetService } from '@/shared/pagination/services/calculate-off-set/calculate-off-set.service';
import { LoadPaginateObjectService } from '@/shared/pagination/services/load-paginate-object/load-paginate-object.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LoadAllCategoriesRepository {
  constructor(
    @InjectRepository(Category)
    private readonly loadAllCategoriesRepository: Repository<Category>,
    private readonly loadPaginateObjectService: LoadPaginateObjectService,
    private readonly calculateOffSetService: CalculateOffSetService,
  ) {}
  async loadAll(
    filterCategoryDto: FilterCategoryDto,
  ): Promise<ResultWithPagination<Category[]>> {
    const page = filterCategoryDto.page | 1;
    const limit = filterCategoryDto.limit | 1;

    const { search } = filterCategoryDto;

    const offSet = this.calculateOffSetService.calculateOffset(page, limit);

    const query = this.loadAllCategoriesRepository.createQueryBuilder(
      'categories',
    );

    if (search) {
      query.andWhere('categories.name ilike :name', { name: `%${search}%` });
    }
    query.orderBy('categories.ref', 'ASC').skip(offSet).take(limit);

    const [report, totalCount] = await query.getManyAndCount();

    const pagination = this.loadPaginateObjectService.loadPaginateObject({
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
