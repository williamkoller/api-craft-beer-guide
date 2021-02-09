import { Style } from '@/entities/style.entity';
import { AddStyleDto } from '@/style/dtos/add-style/add-style.dto';
import { validateOrReject } from 'class-validator';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(Style)
export class AddStyleRepository extends Repository<Style> {
  async add(addStyleDto: AddStyleDto): Promise<Style> {
    const styleCreated = this.create(addStyleDto);
    validateOrReject(addStyleDto);
    return await this.save(styleCreated);
  }
}
