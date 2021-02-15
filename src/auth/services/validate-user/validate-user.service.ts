import { LoadUserByEmailService } from '@/user/services/load-user-by-email/load-user-by-email.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ValidateUserService {
  constructor(
    private readonly loadUserByEmailService: LoadUserByEmailService,
  ) {}
}
