import { ObjectLiteral } from "typeorm/browser";

interface IBaseRepository<TEntity extends ObjectLiteral> {
    Save(entity: TEntity): void;
    Update(partialEntity: TEntity, entity: TEntity): void;
    Remove(entity: TEntity): void;
    getEntities(): Promise<TEntity[]>;
    getEntityById(field: string, id: string): TEntity | undefined;
}

export default IBaseRepository