import { Cat } from '../types/cat.type';

export class CatAggregate {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _age: number;
  private readonly _breed: string;

  constructor(data: Cat) {
    this._id = data.id;
    this._name = data.name;
    this._age = data.age;
    this._breed = data.breed;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get age(): number {
    return this._age;
  }

  get breed(): string {
    return this._breed;
  }
}
