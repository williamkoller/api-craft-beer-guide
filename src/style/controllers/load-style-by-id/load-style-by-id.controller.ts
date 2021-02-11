import { Style } from '@/entities/style.entity';
import { LoadStyleByIdService } from '@/style/services/load-style-by-id/load-style-by-id.service';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('style')
@Controller('styleId')
export class LoadStyleByIdController {
  constructor(private readonly loadStyleByIdService: LoadStyleByIdService) {}

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The record return with Style.',
  })
  @ApiResponse({
    status: 404,
    description: 'Style not found.',
  })
  async loadById(@Param('id') id: string): Promise<Style> {
    return await this.loadStyleByIdService.loadStyleById(id);
  }
}
