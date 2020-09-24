import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Cupom} from '../models';
import {CupomRepository} from '../repositories';

export class CupomController {
  constructor(
    @repository(CupomRepository)
    public cupomRepository : CupomRepository,
  ) {}

  @post('/cupoms', {
    responses: {
      '200': {
        description: 'Cupom model instance',
        content: {'application/json': {schema: getModelSchemaRef(Cupom)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cupom, {
            title: 'NewCupom',
            exclude: ['id'],
          }),
        },
      },
    })
    cupom: Omit<Cupom, 'id'>,
  ): Promise<Cupom> {
    return this.cupomRepository.create(cupom);
  }

  @get('/cupoms/count', {
    responses: {
      '200': {
        description: 'Cupom model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Cupom) where?: Where<Cupom>,
  ): Promise<Count> {
    return this.cupomRepository.count(where);
  }

  @get('/cupoms', {
    responses: {
      '200': {
        description: 'Array of Cupom model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Cupom, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Cupom) filter?: Filter<Cupom>,
  ): Promise<Cupom[]> {
    return this.cupomRepository.find(filter);
  }

  @patch('/cupoms', {
    responses: {
      '200': {
        description: 'Cupom PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cupom, {partial: true}),
        },
      },
    })
    cupom: Cupom,
    @param.where(Cupom) where?: Where<Cupom>,
  ): Promise<Count> {
    return this.cupomRepository.updateAll(cupom, where);
  }

  @get('/cupoms/{id}', {
    responses: {
      '200': {
        description: 'Cupom model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Cupom, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Cupom, {exclude: 'where'}) filter?: FilterExcludingWhere<Cupom>
  ): Promise<Cupom> {
    return this.cupomRepository.findById(id, filter);
  }

  @patch('/cupoms/{id}', {
    responses: {
      '204': {
        description: 'Cupom PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cupom, {partial: true}),
        },
      },
    })
    cupom: Cupom,
  ): Promise<void> {
    await this.cupomRepository.updateById(id, cupom);
  }

  @put('/cupoms/{id}', {
    responses: {
      '204': {
        description: 'Cupom PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cupom: Cupom,
  ): Promise<void> {
    await this.cupomRepository.replaceById(id, cupom);
  }

  @del('/cupoms/{id}', {
    responses: {
      '204': {
        description: 'Cupom DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cupomRepository.deleteById(id);
  }
}
