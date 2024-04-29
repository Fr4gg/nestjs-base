import { Module } from '@nestjs/common';
import { CreateCatUseCase } from './use-cases/createCat.usecase';
import { CatsDomainModule } from '../../domain/cats/catsDomainModule';

@Module({
  imports: [CatsDomainModule],
  providers: [CreateCatUseCase],
  exports: [CreateCatUseCase],
})
export class CatsApplicationModule {}
