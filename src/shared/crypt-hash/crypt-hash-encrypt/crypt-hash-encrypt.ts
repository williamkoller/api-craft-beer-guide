import { Injectable } from '@nestjs/common';
import { hashSync, compareSync } from 'bcrypt';

@Injectable()
export class CryptHashEncrypt {
  private readonly salt = parseInt(process.env.saltOrRounds);

  async encrypt(password: string): Promise<string> {
    return hashSync(password, this.salt);
  }

  async compare(password: string, hash: string): Promise<boolean> {
    return compareSync(password, hash);
  }
}
