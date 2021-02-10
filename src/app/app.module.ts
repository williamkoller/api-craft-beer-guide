import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from '@/config/config.service';
import { StyleModule } from '@/style/style.module';
import { CategoryModule } from '@/category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()[0]),
    forwardRef(() => StyleModule),
    forwardRef(() => CategoryModule),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
