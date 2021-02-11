import { Style } from '@/entities/style.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddStyleRepository } from '@/style/repositories/add-style/add-style.repository';
import { Category } from '@/entities/category.entity';
import { AddStyleService } from '@/style/services/add-style/add-style.service';
import { AddStyleController } from '@/style/controllers/add-style/add-style.controller';
import { LoadAllStylesRepository } from '@/style/repositories/load-all-styles/load-all-styles.repository';
import { LoadAllStylesService } from '@/style/services/load-all-styles/load-all-styles.service';
import { LoadAllStylesController } from '@/style/controllers/load-all-styles/load-all-styles.controller';
import { LoadStyleByNameRepository } from '@/style/repositories/load-style-by-name/load-style-by-name.repository';
import { LoadStyleByNameService } from '@/style/services/load-style-by-name/load-style-by-name.service';
import { LoadStyleByNameController } from '@/style/controllers/load-style-by-name/load-style-by-name.controller';
import { UpdateStyleRepository } from '@/style/repositories/update-style/update-style-repository';
import { UpdateStyleService } from '@/style/services/update-style/update-style.service';
import { UpdateStyleController } from '@/style/controllers/update-style/update-style.controller';
import { DeleteStyleRepository } from '@/style/repositories/delete-style/delete-style.repository';
import { DeleteStyleService } from '@/style/services/delete-style/delete-style.service';
import { DeleteStyleController } from '@/style/controllers/delete-style/delete-style.controller';
import { LoadStyleByIdRepository } from '@/style/repositories/load-style-by-id/load-style-by-id.repository';
import { LoadStyleByIdService } from '@/style/services/load-style-by-id/load-style-by-id.service';
import { LoadStyleByIdController } from '@/style/controllers/load-style-by-id/load-style-by-id.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Style,
      Category,
      AddStyleRepository,
      LoadAllStylesRepository,
      LoadStyleByNameRepository,
      LoadStyleByIdRepository,
      UpdateStyleRepository,
      DeleteStyleRepository,
    ]),
  ],
  providers: [
    AddStyleService,
    LoadAllStylesService,
    LoadStyleByNameService,
    UpdateStyleService,
    DeleteStyleService,
    LoadStyleByIdService,
  ],
  controllers: [
    AddStyleController,
    LoadAllStylesController,
    LoadStyleByNameController,
    UpdateStyleController,
    DeleteStyleController,
    LoadStyleByIdController,
  ],
})
export class StyleModule {}
