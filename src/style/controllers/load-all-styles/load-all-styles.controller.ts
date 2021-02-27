import { Style } from '@/entities/style.entity';
import { ResultWithPagination } from '@/shared/pagination/interfaces/result-with-pagination/result-with-pagination.interface';
import { FilterStyleDto } from '@/style/dtos/filter-style/filter-style.dto.ts';
import { LoadAllStylesService } from '@/style/services/load-all-styles/load-all-styles.service';
import {
  CacheInterceptor,
  Controller,
  Get,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('style')
@Controller('styles')
@UseInterceptors(CacheInterceptor)
export class LoadAllStylesController {
  constructor(private readonly loadAllStylesService: LoadAllStylesService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The records were successfully searched.',
  })
  async loadAll(
    @Query() filterStyleDto: FilterStyleDto,
  ): Promise<ResultWithPagination<Style[]>> {
    return await this.loadAllStylesService.loadAll(filterStyleDto);
  }
}
