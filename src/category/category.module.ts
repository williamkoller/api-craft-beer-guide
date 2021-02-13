import { Category } from '@/entities/category.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoadAllCategoriesRepository } from '@/category/repositories/load-all-categories/load-all-categories.repository';
import { LoaddAllCategoriesService } from '@/category/services/load-all-categories/load-all-categories.service';
import { LoadAllCategoriesController } from '@/category/controllers/load-all-categories/load-all-categories.controller';
import { AddCategoryRepository } from '@/category/repositories/add-category/add-category.repository';
import { AddCategoryService } from '@/category/services/add-category/add-category.service';
import { AddCategoryController } from '@/category/controllers/add-category/add-category.controller';
import { LoadCategoryByNameRepository } from '@/category/repositories/load-category-by-name/load-category-by-name.repository';
import { CalculateOffSetService } from '@/shared/pagination/services/calculate-off-set/calculate-off-set.service';
import { LoadPaginateObjectService } from '@/shared/pagination/services/load-paginate-object/load-paginate-object.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Category,
      AddCategoryRepository,
      LoadCategoryByNameRepository,
    ]),
  ],
  providers: [
    LoaddAllCategoriesService,
    AddCategoryService,
    LoadAllCategoriesRepository,
    LoadPaginateObjectService,
    CalculateOffSetService,
  ],
  controllers: [LoadAllCategoriesController, AddCategoryController],
})
export class CategoryModule {}
