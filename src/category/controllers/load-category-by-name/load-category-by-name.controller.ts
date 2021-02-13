import { LoadCategoryByNameService } from '@/category/services/load-category-by-name/load-categopry-by-name.service';
import { Category } from '@/entities/category.entity';
import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('category')
@Controller('category')
export class LoadCategoryByNameController {
  constructor(
    private readonly loadCategorybyNameService: LoadCategoryByNameService,
  ) {}

  @Get('name/:name')
  async loadByName(@Param('name') name: string): Promise<Array<Category>> {
    try {
      return await this.loadCategorybyNameService.loadCategoryByName(name);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
