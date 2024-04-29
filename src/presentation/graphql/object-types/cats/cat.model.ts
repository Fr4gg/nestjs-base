import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CatModel {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  age: number;

  @Field()
  breed: string;
}
