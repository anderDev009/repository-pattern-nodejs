
import BaseEntity from "../Core/BaseEntity";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
class emp extends BaseEntity {

    @PrimaryGeneratedColumn()
    empno: number;

    @Column()
    mgr: number;

    @Column()
    deptno: number;
    constructor(name: string, empno: number, mgr: number, deptno: number) {
        //El constructor super se debe llamar antes de inicializar las variables
        super(name);
        this.empno = empno;
        this.mgr = mgr;
        this.deptno = deptno;
    }
}

export default emp;