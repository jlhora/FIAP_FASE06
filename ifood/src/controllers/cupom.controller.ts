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
import {Cupom} from '../models';
import {CupomRepository} from '../repositories';

@authenticate('jwt')
export class CupomController {
  constructor(
    @repository(CupomRepository)
    public cupomRepository: CupomRepository,
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
          }),
        },
      },
    })
    cupom: Cupom,
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
  async count(@param.where(Cupom) where?: Where<Cupom>): Promise<Count> {
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
  async find(@param.filter(Cupom) filter?: Filter<Cupom>): Promise<Cupom[]> {
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
    @param.path.string('id') id: string,
    @param.filter(Cupom, {exclude: 'where'})
    filter?: FilterExcludingWhere<Cupom>,
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
    @param.path.string('id') id: string,
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
    @param.path.string('id') id: string,
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
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.cupomRepository.deleteById(id);
  }
}
