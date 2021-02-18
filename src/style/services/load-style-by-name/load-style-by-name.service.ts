import { Style } from '@/entities/style.entity';
import { LoadStyleByNameRepository } from '@/style/repositories/load-style-by-name/load-style-by-name.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LoadStyleByNameService {
  constructor(
    private readonly loadStyleByNameRepository: LoadStyleByNameRepository,
  ) {}

  async loadByName(name: string): Promise<Style> {
    return await this.loadStyleByNameRepository.loadStyleByName(name);
  }
}
