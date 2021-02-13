import { Style } from '@/entities/style.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsObject, IsString } from 'class-validator';

export class AddCategoryDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  overallImpression: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  aroma: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  appearance: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  mouthFelling: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  comments: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  history: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  characteristicIngredients: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  styleComparison: string;

  @ApiProperty()
  @IsObject()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  vitalStatistics: {
    og: string;
    fg: string;
    srm: string;
    ibu: string;
    abv: string;
  };

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  commercialExamples: Array<string>;

  @ApiProperty()
  @IsString()
  @IsArray()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  tags: Array<string>;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  style: Style;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  ref: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  flavor: string;
}
