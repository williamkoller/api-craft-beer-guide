import { DeleteStyleRepository } from '@/style/repositories/delete-style/delete-style.repository';
import { Injectable } from '@nestjs/common';
import { LoadStyleByIdService } from '@/style/services/load-style-by-id/load-style-by-id.service';
import { ReturnResponseMessageType } from '@/utils/types/return-message/return-response-message.type';

@Injectable()
export class DeleteStyleService {
  constructor(
    private readonly deleteStyleRepository: DeleteStyleRepository,
    private readonly loadStyleByIdService: LoadStyleByIdService,
  ) {}

  async deleteStyle(id: string): Promise<ReturnResponseMessageType> {
    await this.loadStyleByIdService.loadStyleById(id);
    return await this.deleteStyleRepository.deleteStyle(id);
  }
}
