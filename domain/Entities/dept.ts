import BaseEntity from "../Core/BaseEntity";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
class dept extends BaseEntity {

    @PrimaryGeneratedColumn()
    public deptno: number;

    @Column()
    public loc: string;

    constructor(name: string, deptno: number, loc: string) {
        super(name);
        this.deptno = deptno;
        this.loc = loc;
    }
}

export default dept;