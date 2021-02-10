import { Style } from '@/entities/style.entity';
import { Injectable, NotAcceptableException } from '@nestjs/common';
import { LoadAllStylesRepository } from '@/style/repositories/load-all-styles/load-all-styles.repository';

@Injectable()
export class LoadAllStylesService {
  constructor(
    private readonly loadAllStylesRepository: LoadAllStylesRepository,
  ) {}

  async loadAll(): Promise<Array<Style>> {
    const styles = await this.loadAllStylesRepository.loadAllStyles();
    if (styles?.length === 0) {
      throw new NotAcceptableException('No records found.');
    }
    return styles;
  }
}
