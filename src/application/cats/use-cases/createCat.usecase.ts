import { CatsService } from '../../../domain/cats/services/cats.service';
import { CatAggregate } from '../../../domain/cats/aggregate/cat.aggregate';
import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../common/use-case/usecase.abstract';

@Injectable()
export class CreateCatUseCase extends UseCase {
  constructor(private readonly catService: CatsService) {
    super();
  }

  async execute(input: {
    name: string;
    age: number;
    breed: string;
  }): Promise<CatAggregate> {
    this.logger.log('Creating a cat');
    return this.catService.create(input);
  }
}
