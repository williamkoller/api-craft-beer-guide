import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from '@/config/config.service';
import { StyleModule } from '@/style/style.module';
import { CategoryModule } from '@/category/category.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from '@/user/user.module';
import { AuthModule } from '@/auth/auth.module';
import { HealthModule } from '@/health/health.module';
import { HealthCheckController } from '@/health/controllers/health-check/health-check.controller';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()[0]),
    forwardRef(() => StyleModule),
    forwardRef(() => CategoryModule),
    forwardRef(() => UserModule),
    forwardRef(() => AuthModule),
    forwardRef(() => HealthModule),
    forwardRef(() => TerminusModule),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [HealthCheckController],
})
export class AppModule {}
