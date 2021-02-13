import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsObject, IsOptional, IsString } from 'class-validator';

export class UpdateCategoryDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  overallImpression: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  aroma: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  appearance: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  mouthFelling: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  comments: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  history: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  characteristicIngredients: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  styleComparison: string;

  @ApiProperty()
  @IsObject()
  @IsOptional()
  vitalStatistics: {
    og: number;
    fg: number;
    srm: number;
    ibu: number;
    abv: number;
  };

  @ApiProperty()
  @IsString()
  @IsOptional()
  commercialExamples: Array<string>;

  @ApiProperty()
  @IsString()
  @IsArray()
  @IsOptional()
  tags: Array<string>;

  @ApiProperty()
  @IsString()
  @IsOptional()
  style: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  ref: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  flavor: string;
}
