import { LoadCategoryByNameService } from '@/category/services/load-category-by-name/load-category-by-name.service';
import { Category } from '@/entities/category.entity';
import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('category')
@Controller('category')
export class LoadCategoryByNameController {
  constructor(
    private readonly loadCategoryByNameService: LoadCategoryByNameService,
  ) {}

  @Get('name/:name')
  @ApiResponse({
    status: 200,
    description: 'The record with Category name.',
  })
  @ApiResponse({
    status: 404,
    description: 'Category not found.',
  })
  async loadByName(@Param('name') name: string): Promise<Category[]> {
    try {
      return await this.loadCategoryByNameService.loadCategoryByName(name);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
