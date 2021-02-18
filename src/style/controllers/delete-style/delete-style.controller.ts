import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';
import { DeleteStyleService } from '@/style/services/delete-style/delete-style.service';
import { ReturnResponseMessageType } from '@/utils/types/return-message/return-response-message.type';
import { Controller, Delete, Param, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('style')
@Controller('style')
export class DeleteStyleController {
  constructor(private readonly deleteStyleService: DeleteStyleService) {}

  @ApiResponse({
    status: 200,
    description: 'Style deleted with successfully.',
  })
  @ApiResponse({
    status: 404,
    description: 'Style not found.',
  })
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ReturnResponseMessageType> {
    return await this.deleteStyleService.deleteStyle(id);
  }
}
