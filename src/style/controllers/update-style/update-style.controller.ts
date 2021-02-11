import { UpdateStyleDto } from '@/style/dtos/update-style/update-style.dto';
import { UpdateStyleService } from '@/style/services/update-style/update-style.service';
import { ReturnResponseMessageType } from '@/style/types/return-message/return-response-message.type';
import { Body, Controller, Param, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('style')
@Controller('style')
export class UpdateStyleController {
  constructor(private readonly updateStyleService: UpdateStyleService) {}

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'Style updated successfully.',
    type: [UpdateStyleDto],
  })
  async update(
    @Param('id') id: string,
    @Body() updateStyleDto: UpdateStyleDto,
  ): Promise<ReturnResponseMessageType> {
    return await this.updateStyleService.updateStyle(id, updateStyleDto);
  }
}
