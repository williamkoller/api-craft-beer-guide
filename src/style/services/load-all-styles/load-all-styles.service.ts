import { Injectable, NotAcceptableException } from '@nestjs/common';
import { LoadAllStylesRepository } from '@/style/repositories/load-all-styles/load-all-styles.repository';
import { FilterStyleDto } from '@/style/dtos/filter-style/filter-style.dto.ts';
import { ResultWithPagination } from '@/shared/pagination/interfaces/result-with-pagination/result-with-pagination.intercafe';
import { Style } from '@/entities/style.entity';

@Injectable()
export class LoadAllStylesService {
  constructor(
    private readonly loadAllStylesRepository: LoadAllStylesRepository,
  ) {}

  async loadAll(
    filterStyleDto: FilterStyleDto,
  ): Promise<ResultWithPagination<Array<Style>>> {
    const styles = await this.loadAllStylesRepository.loadAllStyles(
      filterStyleDto,
    );
    if (!styles) {
      throw new NotAcceptableException('No records found.');
    }
    return styles;
  }
}
