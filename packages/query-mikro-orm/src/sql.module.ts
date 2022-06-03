import { Class } from '@ptc-org/nestjs-query-core';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { DynamicModule } from '@nestjs/common';
import { createMikroOrmQueryServiceProviders } from './providers';

export class NestjsQueryMikroOrmSQLModule {
  static forFeature(entities: Class<unknown>[]): DynamicModule {
    const queryServiceProviders = createMikroOrmQueryServiceProviders(entities);
    const mikroOrmModule = MikroOrmModule.forFeature(entities);
    return {
      imports: [mikroOrmModule],
      module: NestjsQueryMikroOrmSQLModule,
      providers: [...queryServiceProviders],
      exports: [...queryServiceProviders, mikroOrmModule],
    };
  }
}
