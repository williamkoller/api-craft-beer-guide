import { Style } from '@/entities/style.entity';
import { ReturnResponseMessageType } from '@/style/types/return-message/return-response-message.type';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Style)
export class DeleteStyleRepository extends Repository<Style> {
  async deleteStyle(id: string): Promise<ReturnResponseMessageType> {
    await this.delete(id);
    return {
      message: 'Style deleted with succefully',
    };
  }
}
