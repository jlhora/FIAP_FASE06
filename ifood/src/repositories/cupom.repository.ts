import {DefaultCrudRepository} from '@loopback/repository';
import {Cupom, CupomRelations} from '../models';
import {DefaultDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CupomRepository extends DefaultCrudRepository<
  Cupom,
  typeof Cupom.prototype.id,
  CupomRelations
> {
  constructor(
    @inject('datasources.Default') dataSource: DefaultDataSource,
  ) {
    super(Cupom, dataSource);
  }
}
