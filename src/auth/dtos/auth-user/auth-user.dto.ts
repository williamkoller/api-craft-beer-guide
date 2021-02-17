import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthUserDto {
  @ApiProperty()
  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  email: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  password: string;
}
