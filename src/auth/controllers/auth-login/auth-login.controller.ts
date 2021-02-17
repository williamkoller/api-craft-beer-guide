import { AuthUserDto } from '@/auth/dtos/auth-user/auth-user.dto';
import { ReturnUserDto } from '@/auth/dtos/return-user/return-user.dto';
import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';
import { ValidateUserService } from '@/auth/services/validate-user/validate-user.service';
import { LoadUserService } from '@/user/services/load-user/load-user.service';
import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthLoginController {
  constructor(
    private readonly validateUserService: ValidateUserService,
    private readonly loadUserService: LoadUserService,
  ) {}

  @Post('login')
  @ApiResponse({
    status: 200,
    description: 'User logged with successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  async async(@Body() authUserDto: AuthUserDto): Promise<ReturnUserDto> {
    return await this.validateUserService.validateUser(authUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiResponse({
    status: 200,
    description: 'Return UserProfile in request.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @ApiBearerAuth()
  async getProfile(@Request() req) {
    return await this.loadUserService.loadUser(req.id);
  }
}
