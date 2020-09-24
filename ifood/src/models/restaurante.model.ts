import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Restaurante extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nomeFantasia: string;

  @property({
    type: 'string',
    required: true,
  })
  cnpj: string;

  @property({
    type: 'string',
    required: true,
  })
  endereco: string;

  @property({
    type: 'array',
    itemType: 'number',
    required: true,
  })
  horarioFuncionamento: number[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Restaurante>) {
    super(data);
  }
}

export interface RestauranteRelations {
  // describe navigational properties here
}

export type RestauranteWithRelations = Restaurante & RestauranteRelations;
