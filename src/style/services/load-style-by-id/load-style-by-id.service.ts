import { Style } from '@/entities/style.entity';
import { LoadStyleByIdRepository } from '@/style/repositories/load-style-by-id/load-style-by-id.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class LoadStyleByIdService {
  constructor(
    private readonly loadStyleByIdRepository: LoadStyleByIdRepository,
  ) {}

  async loadStyleById(id: string): Promise<Style> {
    const styleId = await this.loadStyleByIdRepository.loadStyleById(id);
    if (!styleId) {
      throw new NotFoundException('Style not found.');
    }
    return styleId;
  }
}
