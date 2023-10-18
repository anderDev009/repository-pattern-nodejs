import IBaseRepository from "../../domain/Repository/IBaseRepository";
import emp from "../../domain/Entities/emp";
import proj from "../../domain/Entities/proj";
import dept from "../../domain/Entities/dept";
interface IEmpRepository extends IBaseRepository<emp> {
    getProjs(empl: emp): proj[];
    getDept(empl: emp): dept;
}

export default IEmpRepository