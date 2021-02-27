import { User } from '@/entities/user.entity';
import { LoadAllUsersService } from '@/user/services/load-all-users/load-all-users.service';
import {
  CacheInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('users')
@UseInterceptors(CacheInterceptor)
export class LoadAllUsersController {
  constructor(private readonly loadAllUsersService: LoadAllUsersService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Load All Users.',
  })
  @ApiResponse({
    status: 404,
    description: 'No records found.',
  })
  async loadAllUsers(): Promise<User[]> {
    return await this.loadAllUsersService.loadAllUsers();
  }
}
