import { DeleteUserService } from '@/user/services/delete-user/delete-user.service';
import { ReturnResponseMessageType } from '@/utils/types/return-message/return-response-message.type';
import { Controller, Delete, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class DeleteUserController {
  constructor(private readonly deleteUserService: DeleteUserService) {}

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'User deleted with successfully.',
  })
  @ApiResponse({
    status: 404,
    description: 'User not found.',
  })
  async delete(@Param('id') id: string): Promise<ReturnResponseMessageType> {
    return await this.deleteUserService.deleteUser(id);
  }
}
