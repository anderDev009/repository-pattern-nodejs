import { EntityTarget, ObjectLiteral } from "typeorm";
import IBaseRepository from "../../domain/Repository/IBaseRepository";
import ProjectContext from "../Context/ProjectContext";
import { UpdateResult } from "typeorm/browser";
export class BaseRepository<TEntity extends ObjectLiteral> implements IBaseRepository<TEntity>{
    protected readonly _rep;
    constructor(ctx: ProjectContext, entity: EntityTarget<TEntity>) {
        this._rep = ctx.getRepository(entity)
    }

    async Save(entity: TEntity): Promise<TEntity> {
        return await this._rep.save(entity);
    }
    async Update(partialEntity: TEntity, entity: TEntity): Promise<UpdateResult> {
        return await this._rep.update(partialEntity, entity);
    }
    async Remove(entity: TEntity): Promise<TEntity> {
        return await this._rep.remove(entity);
    }
    async getEntities(): Promise<TEntity[]> {
        return await this._rep.find();
    }
    async getEntityById(field: string, id: string): Promise<TEntity | undefined> {
        return await this._rep.findOne({ where: { field: id } })
    }

}

// entity: EntityTarget<ObjectLiteral>