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
import {Restaurante} from '../models';
import {RestauranteRepository} from '../repositories';

@authenticate('jwt')
export class RestauranteController {
  constructor(
    @repository(RestauranteRepository)
    public restauranteRepository: RestauranteRepository,
  ) {}

  @post('/restaurantes', {
    responses: {
      '200': {
        description: 'Restaurante model instance',
        content: {'application/json': {schema: getModelSchemaRef(Restaurante)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Restaurante, {
            title: 'NewRestaurante',
            exclude: ['id'],
          }),
        },
      },
    })
    restaurante: Omit<Restaurante, 'id'>,
  ): Promise<Restaurante> {
    return this.restauranteRepository.create(restaurante);
  }

  @get('/restaurantes/count', {
    responses: {
      '200': {
        description: 'Restaurante model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Restaurante) where?: Where<Restaurante>,
  ): Promise<Count> {
    return this.restauranteRepository.count(where);
  }

  @get('/restaurantes', {
    responses: {
      '200': {
        description: 'Array of Restaurante model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Restaurante, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Restaurante) filter?: Filter<Restaurante>,
  ): Promise<Restaurante[]> {
    return this.restauranteRepository.find(filter);
  }

  @patch('/restaurantes', {
    responses: {
      '200': {
        description: 'Restaurante PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Restaurante, {partial: true}),
        },
      },
    })
    restaurante: Restaurante,
    @param.where(Restaurante) where?: Where<Restaurante>,
  ): Promise<Count> {
    return this.restauranteRepository.updateAll(restaurante, where);
  }

  @get('/restaurantes/{id}', {
    responses: {
      '200': {
        description: 'Restaurante model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Restaurante, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Restaurante, {exclude: 'where'})
    filter?: FilterExcludingWhere<Restaurante>,
  ): Promise<Restaurante> {
    return this.restauranteRepository.findById(id, filter);
  }

  @patch('/restaurantes/{id}', {
    responses: {
      '204': {
        description: 'Restaurante PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Restaurante, {partial: true}),
        },
      },
    })
    restaurante: Restaurante,
  ): Promise<void> {
    await this.restauranteRepository.updateById(id, restaurante);
  }

  @put('/restaurantes/{id}', {
    responses: {
      '204': {
        description: 'Restaurante PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() restaurante: Restaurante,
  ): Promise<void> {
    await this.restauranteRepository.replaceById(id, restaurante);
  }

  @del('/restaurantes/{id}', {
    responses: {
      '204': {
        description: 'Restaurante DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.restauranteRepository.deleteById(id);
  }
}
