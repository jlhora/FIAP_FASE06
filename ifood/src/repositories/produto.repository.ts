import {DefaultCrudRepository} from '@loopback/repository';
import {Produto, ProdutoRelations} from '../models';
import {DefaultDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProdutoRepository extends DefaultCrudRepository<
  Produto,
  typeof Produto.prototype.id,
  ProdutoRelations
> {
  constructor(
    @inject('datasources.Default') dataSource: DefaultDataSource,
  ) {
    super(Produto, dataSource);
  }
}
