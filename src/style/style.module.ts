import { Style } from '@/entities/style.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddStyleRepository } from '@/style/repositories/add-style/add-style.repository';
import { Category } from '@/entities/category.entity';
import { AddStyleService } from '@/style/services/add-style/add-style.service';
import { AddStyleController } from '@/style/controllers/add-style/add-style.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Style, Category, AddStyleRepository])],
  providers: [AddStyleService],
  controllers: [AddStyleController],
})
export class StyleModule {}
