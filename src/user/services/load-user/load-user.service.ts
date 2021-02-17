import { UserProfile } from '@/user/interfaces/user/user-profile.interface';
import { Injectable } from '@nestjs/common';
import { LoadUserByIdService } from '../load-user-by-id/load-user-by-id.service';

@Injectable()
export class LoadUserService {
  constructor(private readonly loadUserByIdService: LoadUserByIdService) {}
  async loadUser(id: string): Promise<UserProfile> {
    const user = await this.loadUserByIdService.loadUserById(id);

    const userProfile: UserProfile = {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    return userProfile;
  }
}
