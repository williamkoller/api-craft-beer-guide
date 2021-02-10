import { IsArray, IsOptional, IsString } from 'class-validator';
import { Category } from '@/entities/category.entity';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateStyleDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  categories?: Array<Category>;

  @ApiProperty()
  @IsOptional()
  @IsString()
  ref?: string;
}
