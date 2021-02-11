import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Category } from '@/entities/category.entity';

export class AddStyleDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  description: string;

  @ApiProperty()
  @IsArray()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  categories: Array<Category>;

  @ApiProperty()
  @IsOptional()
  ref: string;
}
