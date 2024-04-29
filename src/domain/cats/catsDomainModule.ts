import { Module } from '@nestjs/common';
import { CatsService } from './services/cats.service';

@Module({
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsDomainModule {}
