import { Style } from '@/entities/style.entity';
import { AddStyleDto } from '@/style/dtos/add-style/add-style.dto';
import { AddStyleService } from '@/style/services/add-style/add-style.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('style')
@Controller('style')
export class AddStyleController {
  constructor(private readonly addStyleService: AddStyleService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({
    status: 409,
    description: 'There is already a record with a name for this style.',
  })
  async add(@Body() addStyleDto: AddStyleDto): Promise<Style> {
    return await this.addStyleService.addStyle(addStyleDto);
  }
}
