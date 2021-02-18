import { Category } from '@/entities/category.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoadAllCategoriesRepository } from '@/category/repositories/load-all-categories/load-all-categories.repository';
import { LoadAllCategoriesService } from '@/category/services/load-all-categories/load-all-categories.service';
import { LoadAllCategoriesController } from '@/category/controllers/load-all-categories/load-all-categories.controller';
import { AddCategoryRepository } from '@/category/repositories/add-category/add-category.repository';
import { AddCategoryService } from '@/category/services/add-category/add-category.service';
import { AddCategoryController } from '@/category/controllers/add-category/add-category.controller';
import { LoadCategoryByNameRepository } from '@/category/repositories/load-category-by-name/load-category-by-name.repository';
import { CalculateOffSetService } from '@/shared/pagination/services/calculate-off-set/calculate-off-set.service';
import { LoadPaginateObjectService } from '@/shared/pagination/services/load-paginate-object/load-paginate-object.service';
import { LoadCategoryByIdRepository } from '@/category/repositories/load-category-by-id/load-category-by-id.repository';
import { LoadCategoryByIdService } from '@/category/services/load-category-by-id/load-category-by-id.service';
import { LoadCategoryByIdController } from '@/category/controllers/load-category-by-id/load-category-by-id.controller';
import { LoadCategoryByNameService } from '@/category/services/load-category-by-name/load-category-by-name.service';
import { LoadCategoryByNameController } from '@/category/controllers/load-category-by-name/load-category-by-name.controller';
import { UpdateCategoryRepository } from '@/category/repositories/update-category/update-category.repository';
import { UpdateCategoryController } from '@/category/controllers/update-category/update-category.controller';
import { UpdateCategoryService } from '@/category/services/update-category/update-category.service';
import { DeleteCategoryRepository } from '@/category/repositories/delete-category/delete-category.repository';
import { DeleteCategoryService } from '@/category/services/delete-category/delete-category.service';
import { DeleteCategoryController } from '@/category/controllers/delete-category/delete-category.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Category,
      AddCategoryRepository,
      LoadCategoryByNameRepository,
      LoadCategoryByIdRepository,
      UpdateCategoryRepository,
      DeleteCategoryRepository,
    ]),
  ],
  providers: [
    LoadAllCategoriesService,
    AddCategoryService,
    LoadAllCategoriesRepository,
    LoadPaginateObjectService,
    CalculateOffSetService,
    LoadCategoryByIdService,
    LoadCategoryByNameService,
    UpdateCategoryService,
    DeleteCategoryService,
  ],
  controllers: [
    LoadAllCategoriesController,
    AddCategoryController,
    LoadCategoryByIdController,
    LoadCategoryByNameController,
    UpdateCategoryController,
    DeleteCategoryController,
  ],
})
export class CategoryModule {}
