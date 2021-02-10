import { LoaddAllCategoriesService } from '@/category/services/load-all-categories/load-all-categories.service';
import { Category } from '@/entities/category.entity';
import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('category')
@Controller('categories')
export class LoadAllCategoriesController {
  constructor(
    private readonly loadAllCategoriesService: LoaddAllCategoriesService,
  ) {}
  @Get()
  @ApiResponse({
    status: 200,
    description: 'The records were successfully searched.',
  })
  async loadAll(): Promise<Array<Category>> {
    return await this.loadAllCategoriesService.loadAllCategories();
  }
}
