import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculateOffSetService {
  constructor() {}

  calculateOffset(page: number, limit: number): number {
    return limit * (page - 1);
  }
}
