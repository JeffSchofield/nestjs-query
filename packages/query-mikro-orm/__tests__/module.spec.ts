import { NestjsQueryMikroOrmNoSQLModule, NestjsQueryMikroOrmSQLModule } from '../src';

describe('NestjsQueryMikroOrmNoSQLModule', () => {
  it('should create a module', () => {
    class TestEntity {}
    const mikroOrmModule = NestjsQueryMikroOrmNoSQLModule.forFeature([TestEntity]);
    expect(mikroOrmModule.imports).toHaveLength(1);
    expect(mikroOrmModule.module).toBe(NestjsQueryMikroOrmNoSQLModule);
    expect(mikroOrmModule.providers).toHaveLength(1);
    expect(mikroOrmModule.exports).toHaveLength(2);
  });
});

describe('NestjsQueryMikroOrmSQLModule', () => {
  it('should create a module', () => {
    class TestEntity {}
    const mikroOrmModule = NestjsQueryMikroOrmSQLModule.forFeature([TestEntity]);
    expect(mikroOrmModule.imports).toHaveLength(1);
    expect(mikroOrmModule.module).toBe(NestjsQueryMikroOrmSQLModule);
    expect(mikroOrmModule.providers).toHaveLength(1);
    expect(mikroOrmModule.exports).toHaveLength(2);
  });
});