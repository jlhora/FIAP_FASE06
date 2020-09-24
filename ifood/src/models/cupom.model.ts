import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Cupom extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'array',
    itemType: 'number',
    required: true,
  })
  restaurante: number[];

  @property({
    type: 'number',
    required: true,
  })
  usuario: number;

  @property({
    type: 'number',
    required: true,
  })
  desconto: number;

  @property({
    type: 'date',
    required: true,
  })
  dataLimite: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Cupom>) {
    super(data);
  }
}

export interface CupomRelations {
  // describe navigational properties here
}

export type CupomWithRelations = Cupom & CupomRelations;
