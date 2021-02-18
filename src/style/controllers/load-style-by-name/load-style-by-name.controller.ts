import { Style } from '@/entities/style.entity';
import { LoadStyleByNameService } from '@/style/services/load-style-by-name/load-style-by-name.service';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('style')
@Controller('style')
export class LoadStyleByNameController {
  constructor(
    private readonly loadStyleByNameService: LoadStyleByNameService,
  ) {}

  @Get(':name')
  @ApiResponse({
    status: 200,
    description: 'The records with the name were successfully returned.',
  })
  @ApiResponse({
    status: 404,
    description: 'Style not found.',
  })
  async loadByName(@Param('name') name: string): Promise<Style> {
    return await this.loadStyleByNameService.loadByName(name);
  }
}
