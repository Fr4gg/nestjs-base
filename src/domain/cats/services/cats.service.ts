import { Injectable } from '@nestjs/common';
import { Cat } from '../types/cat.type';
import { CatAggregate } from '../aggregate/cat.aggregate';
import { v4 as uuidv4 } from 'uuid';

export type CreateCatInput = Omit<Cat, 'id'>;

@Injectable()
export class CatsService {
  private readonly cats: CatAggregate[] = [];

  create(params: CreateCatInput): CatAggregate {
    const cat = new CatAggregate({
      ...params,
      id: uuidv4(),
    });
    this.cats.push(cat);
    return cat;
  }

  findAll(): CatAggregate[] {
    return this.cats;
  }

  findOne(id: string): CatAggregate {
    return this.cats.find((cat) => cat.id === id);
  }
}
