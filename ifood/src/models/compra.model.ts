import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Compra extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  restaurante: number;

  @property({
    type: 'date',
    required: true,
  })
  datahora: string;

  @property({
    type: 'number',
    required: true,
  })
  cliente: number;

  @property({
    type: 'array',
    itemType: 'number',
    required: true,
  })
  produto: number[];

  @property({
    type: 'number',
    required: true,
  })
  cupom: number;

  @property({
    type: 'string',
    required: true,
  })
  valor: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Compra>) {
    super(data);
  }
}

export interface CompraRelations {
  // describe navigational properties here
}

export type CompraWithRelations = Compra & CompraRelations;
