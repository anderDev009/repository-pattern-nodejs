import dept from "../../domain/Entities/dept";
import emp from "../../domain/Entities/emp";
import proj from "../../domain/Entities/proj";
import IEmpRepository from "../Interfaces/IEmpRepository"
import ProjectContext from "../Context/ProjectContext";
import { BaseRepository } from "../Core/BaseRepository";
class EmpRepository extends BaseRepository<emp> implements IEmpRepository {
    constructor(ctx: ProjectContext) {
        super(ctx, emp);
    }

    async getEntityById(id: number): Promise<emp | Promise undefined > {
        return await this._rep.findOne(id);
    }
    async getProjs(empl: emp): proj[] {
    throw new Error("Method not implemented.");
}
    async getDept(empl: emp): dept {
    throw new Error("Method not implemented.");
}
}