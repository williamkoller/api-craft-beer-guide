import { LoadCategoryByIdService } from '@/category/services/load-category-by-id/load-category-by-id.service';
import { Category } from '@/entities/category.entity';
import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('category')
@Controller('category')
export class LoadCategoryByIdController {
  constructor(
    private readonly loadCategoryByIdService: LoadCategoryByIdService,
  ) {}

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The record return with Category.',
  })
  @ApiResponse({
    status: 404,
    description: 'Category not found.',
  })
  async loadById(@Param('id') id: string): Promise<Category> {
    try {
      return await this.loadCategoryByIdService.loadCategoryById(id);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
