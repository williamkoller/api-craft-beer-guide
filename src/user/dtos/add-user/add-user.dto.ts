import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AddUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  fullName: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  password: string;
}
