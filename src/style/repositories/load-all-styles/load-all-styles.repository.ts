import { Style } from '@/entities/style.entity';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(Style)
export class LoadAllStylesRepository extends Repository<Style> {
  async loadAllStyles(): Promise<Array<Style>> {
    return await this.find();
  }
}
