import { UpdateStyleDto } from '@/style/dtos/update-style/update-style.dto';
import { LoadStyleByIdRepository } from '@/style/repositories/load-style-by-id/load-style-by-id.repository';
import { UpdateStyleRepository } from '@/style/repositories/update-style/update-style-repository';
import { ReturnResponseMessageType } from '@/utils/types/return-message/return-response-message.type';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UpdateStyleService {
  constructor(
    private readonly updateStyleRepository: UpdateStyleRepository,
    private readonly loadStyleByIdRepository: LoadStyleByIdRepository,
  ) {}

  async updateStyle(
    id: string,
    updateStyleDto: UpdateStyleDto,
  ): Promise<ReturnResponseMessageType> {
    const styleId = await this.loadStyleByIdRepository.loadStyleById(id);
    if (!styleId) {
      throw new NotFoundException('Style not found.');
    }
    return await this.updateStyleRepository.updateStyle(id, updateStyleDto);
  }
}
