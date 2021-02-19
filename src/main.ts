import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from '@/app/app.module';
import { LoggingInterceptor } from '@/common/interceptors/logging.interceptor';
import * as rateLimit from 'express-rate-limit';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ModelNotFoundException } from '@/common/filters/model-not-found.exception.filter';
import { Logger, ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from '@/common/interceptors/transform.interceptor';
import { HttpExceptionFilter } from '@/common/exceptions/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const logger = new Logger('Main');
  app.useGlobalInterceptors(
    new LoggingInterceptor(),
    new TransformInterceptor(),
  );
  app.useGlobalFilters(new ModelNotFoundException(), new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix('api');
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 100,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Sample Craft Beer Guide')
    .setDescription('API of Craft Beer Guide')
    .setVersion('0.0.2')
    .addTag('style')
    .addTag('category')
    .addTag('user')
    .addTag('auth')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  await app.listen(process.env.PORT, () =>
    logger.log('Application is listening'),
  );
}
bootstrap();
