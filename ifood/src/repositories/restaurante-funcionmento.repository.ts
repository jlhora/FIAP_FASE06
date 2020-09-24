import {DefaultCrudRepository} from '@loopback/repository';
import {RestauranteFuncionmento, RestauranteFuncionmentoRelations} from '../models';
import {DefaultDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RestauranteFuncionmentoRepository extends DefaultCrudRepository<
  RestauranteFuncionmento,
  typeof RestauranteFuncionmento.prototype.id,
  RestauranteFuncionmentoRelations
> {
  constructor(
    @inject('datasources.Default') dataSource: DefaultDataSource,
  ) {
    super(RestauranteFuncionmento, dataSource);
  }
}
