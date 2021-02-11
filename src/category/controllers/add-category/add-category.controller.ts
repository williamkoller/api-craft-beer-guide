import { AddCategoryDto } from '@/category/dtos/add-categroy/add-category.dto';
import { AddCategoryService } from '@/category/services/add-category/add-category.service';
import { Category } from '@/entities/category.entity';
import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('category')
@Controller('category')
export class AddCategoryController {
  constructor(private readonly addCategoryService: AddCategoryService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully created.',
  })
  async addCategory(@Body() addCategoryDto: AddCategoryDto): Promise<Category> {
    try {
      return await this.addCategoryService.add(addCategoryDto);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
