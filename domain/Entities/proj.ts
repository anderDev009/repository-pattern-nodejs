import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
class proj {
    @PrimaryGeneratedColumn()
    public projid: number;

    @Column()
    public empno: number;

    @Column()
    public startdate: Date;

    @Column()
    public enddate: Date;

    constructor(projId: number, empNo: number, startD: Date, endDate: Date) {
        this.projid = projId;
        this.empno = empNo;
        this.startdate = startD;
        this.enddate = endDate;
    }

}
export default proj;