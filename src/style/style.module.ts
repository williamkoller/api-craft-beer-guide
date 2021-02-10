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

@Module({
  imports: [TypeOrmModule.forFeature([Style, Category, AddStyleRepository, LoadAllStylesRepository])],
  providers: [AddStyleService, LoadAllStylesService],
  controllers: [AddStyleController, LoadAllStylesController],
})
export class StyleModule {}
