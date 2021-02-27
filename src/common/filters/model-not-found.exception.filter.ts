import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';

@Catch(EntityNotFoundError)
export class ModelNotFoundException implements ExceptionFilter {
  catch(exception: EntityNotFoundError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    return response.status(HttpStatus.NOT_FOUND).json({
      error: {
        error: 'Not Found',
        message: exception.message,
      },
    });
  }
}
