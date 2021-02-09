import { Injectable } from '@nestjs/common';
import { Style } from '@/entities/style.entity';
import { AddStyleDto } from '@/style/dtos/add-style/add-style.dto';
import { AddStyleRepository } from '@/style/repositories/add-style/add-style.repository';

@Injectable()
export class AddStyleService {
  constructor(private readonly addStyleRepository: AddStyleRepository) {}

  async addStyle(addStyleDto: AddStyleDto): Promise<Style> {
    return await this.addStyleRepository.add(addStyleDto);
  }
}
