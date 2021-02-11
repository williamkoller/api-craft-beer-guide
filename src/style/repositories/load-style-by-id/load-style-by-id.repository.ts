import { Style } from '@/entities/style.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Style)
export class LoadStyleByIdRepository extends Repository<Style> {
  async loadStyleById(id: string): Promise<Style> {
    return await this.findOne(id);
  }
}
