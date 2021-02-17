import { User } from '@/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class ReturnUserDto {
  @ApiProperty()
  user: User;

  @ApiProperty()
  token: string;
}
