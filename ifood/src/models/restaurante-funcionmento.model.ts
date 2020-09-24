import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class RestauranteFuncionmento extends Entity {
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
    type: 'string',
    required: true,
  })
  diaSemana: string;

  @property({
    type: 'string',
    required: true,
  })
  abertura: string;

  @property({
    type: 'string',
    required: true,
  })
  fechamento: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RestauranteFuncionmento>) {
    super(data);
  }
}

export interface RestauranteFuncionmentoRelations {
  // describe navigational properties here
}

export type RestauranteFuncionmentoWithRelations = RestauranteFuncionmento & RestauranteFuncionmentoRelations;
