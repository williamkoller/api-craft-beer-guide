import { DeleteCategoryService } from '@/category/services/delete-category/delete-category.service';
import { ReturnResponseMessageType } from '@/utils/types/return-message/return-response-message.type';
import { Controller, Delete, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('category')
@Controller('category')
export class DeleteCategoryController {
  constructor(private readonly deleteCategoryService: DeleteCategoryService) {}

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Category deleted with successfully.',
  })
  @ApiResponse({
    status: 404,
    description: 'Category not found.',
  })
  async delete(@Param('id') id: string): Promise<ReturnResponseMessageType> {
    return await this.deleteCategoryService.deleteCategory(id);
  }
}
