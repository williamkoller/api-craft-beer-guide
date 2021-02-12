import { PaginationDto } from '@/shared/pagination/dtos/pagination/pagination.dto';
import { Pagination } from '@/shared/pagination/interfaces/pagination/pagination.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PaginationService {
  constructor() {}

  paginateResultSetKeys(
    keys: string[],
    offset: number,
    limit: number,
  ): string[] {
    let result: string[] = keys;

    if (offset) {
      result = result.slice(offset);
    }
    if (limit) {
      result = result.slice(0, limit);
    }

    return result;
  }

  buildPaginationObject(paginationData: PaginationDto): Pagination {
    const { totalCount, page } = paginationData;

    const offset = Number(paginationData.offset);
    const limit = Number(paginationData.limit);

    const pageCount = Math.ceil(totalCount / limit);

    const result: Pagination = {
      page: Number(page),
      limit,
      offset,
      pageCount,
      totalCount,
    };

    return result;
  }

  calculateOffset(page: number, limit: number): number {
    const offset = limit * (page - 1);

    return offset;
  }
}
