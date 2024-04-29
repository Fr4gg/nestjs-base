import { Module } from '@nestjs/common';
import { CatsResolver } from './resolvers/cats.resolver';
import { CatsApplicationModule } from '../../application/cats/catsApplicationModule';

@Module({
  imports: [CatsApplicationModule],
  providers: [CatsResolver],
})
export class GraphPresentationModule {}
