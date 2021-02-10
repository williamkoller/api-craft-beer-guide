import { Style } from '@/entities/style.entity';
import { LoadStyleByNameRepository } from '@/style/repositories/load-style-by-name/load-style-by-name.repository';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class LoadStyleByNameService {
  constructor(private readonly loadStyleByName: LoadStyleByNameRepository) {}

  async loadByName(name: string): Promise<Array<Style>> {
    const style = await this.loadStyleByName.loadStyleByName(name);
    if (!style) {
      throw new BadRequestException('Style not found.');
    }
    return style;
  }
}
