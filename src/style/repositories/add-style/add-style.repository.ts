import { Style } from '@/entities/style.entity';
import { AddStyleDto } from '@/style/dtos/add-style/add-style.dto';
import { validateOrReject } from 'class-validator';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(Style)
export class AddStyleRepository extends Repository<Style> {
  async add(addStyleDto: AddStyleDto): Promise<Style> {
    const style = Object.assign({} as Style, addStyleDto);
    validateOrReject(style);
    return await this.save(style);
  }
}
