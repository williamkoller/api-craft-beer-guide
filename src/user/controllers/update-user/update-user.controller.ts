import { UpdateUserDto } from '@/user/dtos/update-user/update-user.dto';
import { UpdateUserService } from '@/user/services/update-user/update-user.service';
import { ReturnResponseMessageType } from '@/utils/types/return-message/return-response-message.type';
import {
  BadRequestException,
  Body,
  Controller,
  Param,
  Put,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UpdateUserController {
  constructor(private readonly updateUserService: UpdateUserService) {}

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'User updated with successfully.',
  })
  @ApiResponse({
    status: 404,
    description: 'User not found.',
  })
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<ReturnResponseMessageType> {
    try {
      return await this.updateUserService.updateUser(id, updateUserDto);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
