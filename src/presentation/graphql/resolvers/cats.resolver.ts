import { Args, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CatModel } from '../object-types/cats/cat.model';
import { CreateCatUseCase } from '../../../application/cats/use-cases/createCat.usecase';
import { CreateCatInput } from '../input-types/cats/createCat.input';

@Resolver(CatModel)
export class CatsResolver {
  constructor(private readonly createCatUseCase: CreateCatUseCase) {}

  @Query(() => [CatModel])
  cat() {
    return [{ id: '1', age: 1, breed: 'Breed 1' }];
  }
  @ResolveField('name')
  name(): string {
    return 'Resolved name';
  }

  @Mutation(() => CatModel)
  createCat(@Args('params') params: CreateCatInput) {
    return this.createCatUseCase.execute(params);
  }
}
