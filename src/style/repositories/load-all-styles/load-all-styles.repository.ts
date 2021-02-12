import { Style } from '@/entities/style.entity';
import { ResultWithPagination } from '@/shared/pagination/interfaces/result-with-pagination/result-with-pagination.intercafe';
import { PaginationService } from '@/shared/pagination/services/pagination.service';
import { FilterStyleDto } from '@/style/dtos/filter-style/filter-style.dto.ts';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityRepository } from 'typeorm';

@Injectable()
@EntityRepository(Style)
export class LoadAllStylesRepository {
  constructor(
    private readonly paginationService: PaginationService,
    @InjectRepository(Style)
    private readonly loadAllStylesRepository: Repository<Style>,
  ) {}
  async loadAllStyles(
    filterStyleDto: FilterStyleDto,
  ): Promise<ResultWithPagination<Array<Style>>> {
    const page = filterStyleDto.page | 1;
    const limit = filterStyleDto.limit | 1;

    const { search } = filterStyleDto;

    const offSet = this.paginationService.calculateOffset(page, limit);

    const query = this.loadAllStylesRepository
      .createQueryBuilder('styles')
      .innerJoinAndSelect('styles.categories', 'categories')
      .innerJoinAndSelect('categories.style', 'style');

    if (search) {
      query.andWhere('styles.name ilike : name', { name: `%${search}%` });
    }
    query.orderBy('styles.ref', 'ASC').skip(offSet).take(limit);

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
