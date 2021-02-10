import { UpdateStyleDto } from '@/style/dtos/update-style/update-style.dto';
import { UpdateStyleRepository } from '@/style/repositories/update-style/update-style-repository';
import { ReturnResponseMessageType } from '@/style/types/return-message/return-response-message.type';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateStyleService {
  constructor(private readonly updateStyleRepository: UpdateStyleRepository) {}

  async updateStyle(
    id: string,
    updateStyleDto: UpdateStyleDto,
  ): Promise<ReturnResponseMessageType> {
    return await this.updateStyleRepository.updateStyle(id, updateStyleDto);
  }
}
