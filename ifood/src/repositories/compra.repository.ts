import {DefaultCrudRepository} from '@loopback/repository';
import {Compra, CompraRelations} from '../models';
import {DefaultDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CompraRepository extends DefaultCrudRepository<
  Compra,
  typeof Compra.prototype.id,
  CompraRelations
> {
  constructor(
    @inject('datasources.Default') dataSource: DefaultDataSource,
  ) {
    super(Compra, dataSource);
  }
}
