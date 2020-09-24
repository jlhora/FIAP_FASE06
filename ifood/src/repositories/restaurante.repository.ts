import {DefaultCrudRepository} from '@loopback/repository';
import {Restaurante, RestauranteRelations} from '../models';
import {DefaultDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RestauranteRepository extends DefaultCrudRepository<
  Restaurante,
  typeof Restaurante.prototype.id,
  RestauranteRelations
> {
  constructor(
    @inject('datasources.Default') dataSource: DefaultDataSource,
  ) {
    super(Restaurante, dataSource);
  }
}
