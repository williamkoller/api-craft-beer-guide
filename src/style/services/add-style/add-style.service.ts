import { ConflictException, Injectable } from '@nestjs/common';
import { Style } from '@/entities/style.entity';
import { AddStyleDto } from '@/style/dtos/add-style/add-style.dto';
import { AddStyleRepository } from '@/style/repositories/add-style/add-style.repository';
import { LoadStyleByNameService } from '../load-style-by-name/load-style-by-name.service';

@Injectable()
export class AddStyleService {
  constructor(
    private readonly addStyleRepository: AddStyleRepository,
    private readonly loadStyleByNameService: LoadStyleByNameService,
  ) {}

  async addStyle(addStyleDto: AddStyleDto): Promise<Style> {
    const { name } = addStyleDto;
    const style = await this.loadStyleByNameService.loadByName(name);
    if (style) {
      throw new ConflictException(
        'There is already a record with a name for this style.',
      );
    }
    return await this.addStyleRepository.add(addStyleDto);
  }
}
