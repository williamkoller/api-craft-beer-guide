import { AddCategoryDto } from '@/category/dtos/add-categroy/add-category.dto';
import { AddCategoryRepository } from '@/category/repositories/add-category/add-category.repository';
import { LoadCategoryByNameRepository } from '@/category/repositories/load-category-by-name/load-category-by-name.repository';
import { Category } from '@/entities/category.entity';
import { ConflictException, Injectable } from '@nestjs/common';

@Injectable()
export class AddCategoryService {
  constructor(
    private readonly addCategoryRepository: AddCategoryRepository,
    private readonly loadCategoryByName: LoadCategoryByNameRepository,
  ) {}
  async add(addCategoryDto: AddCategoryDto): Promise<Category> {
    const { name } = addCategoryDto;
    const [category] = await this.loadCategoryByName.loaByName(name);
    if (category) {
      throw new ConflictException(
        'There is already a record with a name for this category.',
      );
    }
    return await this.addCategoryRepository.addCategory(addCategoryDto);
  }
}
