import { UpdateCategoryDto } from '@/category/dtos/update-category/update-category.dto';
import { UpdateCategoryService } from '@/category/services/update-category/update-category.service';
import { ReturnResponseMessageType } from '@/utils/types/return-message/return-response-message.type';
import {
  BadRequestException,
  Body,
  Controller,
  Param,
  Put,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('category')
@Controller('category')
export class UpdateCategoryController {
  constructor(private readonly updateCategoryService: UpdateCategoryService) {}

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'Category updated successfully.',
  })
  @ApiResponse({
    status: 404,
    description: 'Category not found.',
  })
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): Promise<ReturnResponseMessageType> {
    try {
      return await this.updateCategoryService.updateCategory(
        id,
        updateCategoryDto,
      );
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
