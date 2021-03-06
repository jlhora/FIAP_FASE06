import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Default',
  connector: 'mongodb',
  url: '',
  host: '127.0.0.1',
  port: 27017,
  user: '',
  password: '',
  database: 'ifood',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DefaultDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Default';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Default', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
