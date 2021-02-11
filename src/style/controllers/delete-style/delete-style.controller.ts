import { DeleteStyleService } from '@/style/services/delete-style/delete-style.service';
import { ReturnResponseMessageType } from '@/style/types/return-message/return-response-message.type';
import { Controller, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('style')
@Controller('style')
export class DeleteStyleController {
  constructor(private readonly delteStyleService: DeleteStyleService) {}

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ReturnResponseMessageType> {
    return await this.delteStyleService.deleteStyle(id);
  }
}
