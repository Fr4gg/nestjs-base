import { ExecuteContext, UseCase } from './usecase.interface';
import { Logger } from '@nestjs/common';

export abstract class AbstractUseCase implements UseCase {
  protected readonly logger: Logger;

  constructor() {
    this.logger = new Logger(this.constructor.name);
  }

  abstract execute(params?: any, context?: ExecuteContext): unknown;
}
