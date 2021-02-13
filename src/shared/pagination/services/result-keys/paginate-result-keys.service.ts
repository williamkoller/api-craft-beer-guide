import { Injectable } from '@nestjs/common';

@Injectable()
export class PaginateResultKeysService {
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
}
