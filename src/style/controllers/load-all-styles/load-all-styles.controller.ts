import { Style } from '@/entities/style.entity';
import { LoadAllStylesService } from '@/style/services/load-all-styles/load-all-styles.service';
import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('style')
@Controller('style')
export class LoadAllStylesController {
  constructor(private readonly loadallStylesService: LoadAllStylesService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'The records were successfully searched.' })
  async loadAll(): Promise<Array<Style>> {
    return await this.loadallStylesService.loadAll();
  }
}
