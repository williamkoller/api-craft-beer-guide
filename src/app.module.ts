import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configDatabaseService } from '@/config/database/config-database.service';

@Module({
  imports: [TypeOrmModule.forRoot(configDatabaseService.getTypeOrmConfig()[0])],
  controllers: [],
  providers: [],
})
export class AppModule {}
