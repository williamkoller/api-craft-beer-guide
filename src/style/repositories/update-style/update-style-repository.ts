import { Style } from '@/entities/style.entity';
import { UpdateStyleDto } from '@/style/dtos/update-style/update-style.dto';
import { ReturnResponseMessageType } from '@/style/types/return-message/return-response-message.type';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Style)
export class UpdateStyleRepository extends Repository<Style> {
  async updateStyle(
    id: string,
    updateStyleDto: UpdateStyleDto,
  ): Promise<ReturnResponseMessageType> {
    await this.update(id, updateStyleDto);
    return {
      message: 'Style updated successfully.',
    };
  }
}
