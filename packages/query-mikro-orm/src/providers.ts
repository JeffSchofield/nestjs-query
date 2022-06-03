import { Class, getQueryServiceToken } from '@ptc-org/nestjs-query-core';
import { FactoryProvider } from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/core';
import { getRepositoryToken } from '@mikro-orm/nestjs';

function createMikroOrmQueryServiceProvider<Entity>(
  EntityClass: Class<Entity>
): FactoryProvider {
  return {
    provide: getQueryServiceToken(EntityClass),
    useFactory(repo: EntityRepository<Entity>) {
      return {}
    },
    inject: [getRepositoryToken(EntityClass)],
  };
}

export const createMikroOrmQueryServiceProviders = (
  entities: Class<unknown>[]
): FactoryProvider[] => entities.map((entity) => createMikroOrmQueryServiceProvider(entity));
