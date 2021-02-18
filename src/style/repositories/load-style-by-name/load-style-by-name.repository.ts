import { Style } from '@/entities/style.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Style)
export class LoadStyleByNameRepository extends Repository<Style> {
  async loadStyleByName(name: string): Promise<Style> {
    return await this.createQueryBuilder('styles')
      .where('(styles.name ilike (:name))', { name: `%${name}%` })
      .getOne();
  }
}
