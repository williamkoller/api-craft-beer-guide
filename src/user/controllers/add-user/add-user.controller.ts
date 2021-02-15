import { User } from '@/entities/user.entity';
import { AddUserDto } from '@/user/dtos/add-user/add-user.dto';
import { AddUserService } from '@/user/services/add-user/add-user.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class AddUserController {
  constructor(private readonly addUserSerice: AddUserService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  async add(@Body() addUserDto: AddUserDto): Promise<User> {
    return await this.addUserSerice.add(addUserDto);
  }
}
