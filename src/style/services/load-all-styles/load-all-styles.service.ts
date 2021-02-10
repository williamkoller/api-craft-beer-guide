import { Style } from '@/entities/style.entity';
import { Injectable } from '@nestjs/common';
import { LoadAllStylesRepository } from '@/style/repositories/load-all-styles/load-all-styles.repository';

@Injectable()
export class LoadAllStylesService {
  constructor(private readonly loadAllStylesRepository: LoadAllStylesRepository) {}

  async loadAll(): Promise<Array<Style>> {
    return await this.loadAllStylesRepository.loadAllStyles();
  }
}
