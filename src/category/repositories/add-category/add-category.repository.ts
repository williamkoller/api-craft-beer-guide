import { AddCategoryDto } from '@/category/dtos/add-categroy/add-category.dto';
import { Category } from '@/entities/category.entity';
import { validateOrReject } from 'class-validator';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Category)
export class AddCategoryRepository extends Repository<Category> {
  async addCategory(addCategoryDto: AddCategoryDto): Promise<Category> {
    const category = Object.assign({} as Category, addCategoryDto);
    validateOrReject(category);
    const categoryCreated = this.create({
      overallImpression: category.overallImpression,
      appearance: category.appearance,
      aroma: category.aroma,
      characteristicIngredients: category.characteristicIngredients,
      comments: category.comments,
      commercialExamples: category.commercialExamples,
      history: category.history,
      mouthFelling: category.mouthFelling,
      style: category.style,
      styleComparison: category.styleComparison,
      tags: category.tags,
      vitalStatistics: category.vitalStatistics,
    });
    return await this.save(categoryCreated);
  }
}
