import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MutationResponse<T> {
  payload: T;
}
