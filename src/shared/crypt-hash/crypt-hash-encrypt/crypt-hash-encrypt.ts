import { Injectable } from '@nestjs/common';
import { hashSync } from 'bcrypt';

@Injectable()
export class CryptHashEncrypt {
  private readonly salt = Number(process.env.saltOrRounds);

  async encrypt(password: string): Promise<string> {
    return hashSync(password, this.salt);
  }
}
