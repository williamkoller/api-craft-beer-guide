import { AddCategoryDto } from '@/category/dtos/add-categroy/add-category.dto';
import { AddCategoryRepository } from '@/category/repositories/add-category/add-category.repository';
import { Category } from '@/entities/category.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddCategoryService {
  constructor(private readonly addCategoryRepository: AddCategoryRepository) {}
  async add(addCategoryDto: AddCategoryDto): Promise<Category> {
    return await this.addCategoryRepository.addCategory(addCategoryDto);
  }
}
