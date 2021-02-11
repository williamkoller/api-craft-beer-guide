import { Category } from '@/entities/category.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoadAllCategoriesRepository } from '@/category/repositories/load-all-categories/load-all-categories.repository';
import { LoaddAllCategoriesService } from '@/category/services/load-all-categories/load-all-categories.service';
import { LoadAllCategoriesController } from '@/category/controllers/load-all-categories/load-all-categories.controller';
import { AddCategoryRepository } from '@/category/repositories/add-category/add-category.repository';
import { AddCategoryService } from '@/category/services/add-category/add-category.service';
import { AddCategoryController } from '@/category/controllers/add-category/add-category.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Category,
      LoadAllCategoriesRepository,
      AddCategoryRepository,
    ]),
  ],
  providers: [LoaddAllCategoriesService, AddCategoryService],
  controllers: [LoadAllCategoriesController, AddCategoryController],
})
export class CategoryModule {}
