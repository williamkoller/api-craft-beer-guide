import { AuthUserDto } from '@/auth/dtos/auth-user/auth-user.dto';
import { ReturnUserDto } from '@/auth/dtos/return-user/return-user.dto';
import { ValidateUserService } from '@/auth/services/validate-user/validate-user.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthLoginController {
  constructor(private readonly validateUserService: ValidateUserService) {}

  @Post('login')
  async async(@Body() authUserDto: AuthUserDto): Promise<ReturnUserDto> {
    return await this.validateUserService.validateUser(authUserDto);
  }
}
