import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from '@/config/config.service';
import { StyleModule } from '@/style/style.module';
import { CategoryModule } from '@/category/category.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from '@/user/user.module';
import { AuthModule } from '@/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()[0]),
    forwardRef(() => StyleModule),
    forwardRef(() => CategoryModule),
    forwardRef(() => UserModule),
    forwardRef(() => AuthModule),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
