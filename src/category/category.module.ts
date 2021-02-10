import { Category } from '@/entities/category.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoadAllCategoriesRepository } from '@/category/repositories/load-all-categories/load-all-categories.repository';
import { LoaddAllCategoriesService } from '@/category/services/load-all-categories/load-all-categories.service';
import { LoadAllCategoriesController } from '@/category/controllers/load-all-categories/load-all-categories.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Category, LoadAllCategoriesRepository])],
  providers: [LoaddAllCategoriesService],
  controllers: [LoadAllCategoriesController],
})
export class CategoryModule {}
