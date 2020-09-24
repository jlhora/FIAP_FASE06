import {authenticate} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
} from '@loopback/rest';
import {RestauranteFuncionmento} from '../models';
import {RestauranteFuncionmentoRepository} from '../repositories';

@authenticate('jwt')
export class RestauranteFuncionamentoController {
  constructor(
    @repository(RestauranteFuncionmentoRepository)
    public restauranteFuncionmentoRepository: RestauranteFuncionmentoRepository,
  ) {}

  @post('/restaurante-funcionmentos', {
    responses: {
      '200': {
        description: 'RestauranteFuncionmento model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(RestauranteFuncionmento),
          },
        },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RestauranteFuncionmento, {
            title: 'NewRestauranteFuncionmento',
            exclude: ['id'],
          }),
        },
      },
    })
    restauranteFuncionmento: Omit<RestauranteFuncionmento, 'id'>,
  ): Promise<RestauranteFuncionmento> {
    return this.restauranteFuncionmentoRepository.create(
      restauranteFuncionmento,
    );
  }

  @get('/restaurante-funcionmentos/count', {
    responses: {
      '200': {
        description: 'RestauranteFuncionmento model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(RestauranteFuncionmento)
    where?: Where<RestauranteFuncionmento>,
  ): Promise<Count> {
    return this.restauranteFuncionmentoRepository.count(where);
  }

  @get('/restaurante-funcionmentos', {
    responses: {
      '200': {
        description: 'Array of RestauranteFuncionmento model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(RestauranteFuncionmento, {
                includeRelations: true,
              }),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(RestauranteFuncionmento)
    filter?: Filter<RestauranteFuncionmento>,
  ): Promise<RestauranteFuncionmento[]> {
    return this.restauranteFuncionmentoRepository.find(filter);
  }

  @patch('/restaurante-funcionmentos', {
    responses: {
      '200': {
        description: 'RestauranteFuncionmento PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RestauranteFuncionmento, {partial: true}),
        },
      },
    })
    restauranteFuncionmento: RestauranteFuncionmento,
    @param.where(RestauranteFuncionmento)
    where?: Where<RestauranteFuncionmento>,
  ): Promise<Count> {
    return this.restauranteFuncionmentoRepository.updateAll(
      restauranteFuncionmento,
      where,
    );
  }

  @get('/restaurante-funcionmentos/{id}', {
    responses: {
      '200': {
        description: 'RestauranteFuncionmento model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(RestauranteFuncionmento, {
              includeRelations: true,
            }),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(RestauranteFuncionmento, {exclude: 'where'})
    filter?: FilterExcludingWhere<RestauranteFuncionmento>,
  ): Promise<RestauranteFuncionmento> {
    return this.restauranteFuncionmentoRepository.findById(id, filter);
  }

  @patch('/restaurante-funcionmentos/{id}', {
    responses: {
      '204': {
        description: 'RestauranteFuncionmento PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RestauranteFuncionmento, {partial: true}),
        },
      },
    })
    restauranteFuncionmento: RestauranteFuncionmento,
  ): Promise<void> {
    await this.restauranteFuncionmentoRepository.updateById(
      id,
      restauranteFuncionmento,
    );
  }

  @put('/restaurante-funcionmentos/{id}', {
    responses: {
      '204': {
        description: 'RestauranteFuncionmento PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() restauranteFuncionmento: RestauranteFuncionmento,
  ): Promise<void> {
    await this.restauranteFuncionmentoRepository.replaceById(
      id,
      restauranteFuncionmento,
    );
  }

  @del('/restaurante-funcionmentos/{id}', {
    responses: {
      '204': {
        description: 'RestauranteFuncionmento DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.restauranteFuncionmentoRepository.deleteById(id);
  }
}
