import { Injectable } from '@nestjs/common';
import { hashSync } from 'bcrypt';

@Injectable()
export class CryptHashEncrypt {
  private readonly salt = Number(process.env.SALT_OR_ROUNDS);

  async encrypt(password: string): Promise<string> {
    return hashSync(password, this.salt);
  }
}
