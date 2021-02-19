import { Injectable, NotFoundException } from '@nestjs/common';
import { LoadAllStylesRepository } from '@/style/repositories/load-all-styles/load-all-styles.repository';
import { FilterStyleDto } from '@/style/dtos/filter-style/filter-style.dto.ts';
import { ResultWithPagination } from '@/shared/pagination/interfaces/result-with-pagination/result-with-pagination.interface';
import { Style } from '@/entities/style.entity';

@Injectable()
export class LoadAllStylesService {
  constructor(
    private readonly loadAllStylesRepository: LoadAllStylesRepository,
  ) {}

  async loadAll(
    filterStyleDto: FilterStyleDto,
  ): Promise<ResultWithPagination<Style[]>> {
    const styles = await this.loadAllStylesRepository.loadAllStyles(
      filterStyleDto,
    );
    if (styles.result?.length === 0) {
      throw new NotFoundException('No record found.');
    }
    return styles;
  }
}
