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

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Style,
      Category,
      AddStyleRepository,
      LoadAllStylesRepository,
      LoadStyleByNameRepository,
      UpdateStyleRepository,
    ]),
  ],
  providers: [
    AddStyleService,
    LoadAllStylesService,
    LoadStyleByNameService,
    UpdateStyleService,
  ],
  controllers: [
    AddStyleController,
    LoadAllStylesController,
    LoadStyleByNameController,
    UpdateStyleController,
  ],
})
export class StyleModule {}
