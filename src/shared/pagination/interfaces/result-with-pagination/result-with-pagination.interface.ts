import { Pagination } from '../pagination/pagination.interface';

export interface ResultWithPagination<T> {
  paged: Pagination;
  result: T | T[];
}
