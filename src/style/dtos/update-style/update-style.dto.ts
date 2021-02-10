import { IsArray, IsOptional, IsString } from 'class-validator';
import { Category } from '@/entities/category.entity';

export class UpdateStyleDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsArray()
  categories?: Array<Category>;

  @IsOptional()
  @IsString()
  ref?: string;
}
