import { IExecuteContext, IUseCase } from './usecase.interface';
import { Logger } from '@nestjs/common';

export abstract class UseCase implements IUseCase {
  protected readonly logger: Logger;

  constructor() {
    this.logger = new Logger(this.constructor.name);
  }

  abstract execute(params?: any, context?: IExecuteContext): unknown;
}
