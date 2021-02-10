import { Category } from '@/entities/category.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoadAllCategoriesRepository } from '@/category/repositories/load-all-categories/load-all-categories.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Category, LoadAllCategoriesRepository])],
})
export class CategoryModule {}
