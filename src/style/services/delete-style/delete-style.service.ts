import { DeleteStyleRepository } from '@/style/repositories/delete-style/delete-style.repository';
import { LoadStyleByIdRepository } from '@/style/repositories/load-style-by-id/load-style-by-id.repository';
import { ReturnResponseMessageType } from '@/style/types/return-message/return-response-message.type';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class DeleteStyleService {
  constructor(
    private readonly deleteStyleRepository: DeleteStyleRepository,
    private readonly loadStyleByIdRepository: LoadStyleByIdRepository,
  ) {}
  async deleteStyle(id: string): Promise<ReturnResponseMessageType> {
    const styles = await this.loadStyleByIdRepository.loadStyleById(id);
    if (!styles) {
      throw new NotFoundException('Style not found.');
    }
    return await this.deleteStyleRepository.deleteStyle(id);
  }
}
