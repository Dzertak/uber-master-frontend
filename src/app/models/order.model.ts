import {BaseEntity} from './baseentity.model';

export class Order extends BaseEntity {
    smallDescription: string;
    bigDescription: string;
    startDate: Date;
    dueDate: Date;
    status: string;
    master: number;
    masterName: string;
    masterProfession: string;
    mark: number;
    masterEndDate: Date;
    pokeId: number;


    constructor(name: string, description: string, object_id: number, smallDescription: string, bigDescription: string,
                startDate: Date, dueDate: Date, status: string, master: number, masterName: string, masterProfession: string,
                mark: number, masterEndDate: Date, pokeId: number) {
        super(name, description, object_id);
        this.smallDescription = smallDescription;
        this.bigDescription = bigDescription;
        this.startDate = startDate;
        this.dueDate = dueDate;
        this.status = status;
        this.master = master;
        this.masterProfession = masterProfession;
        this.masterName = masterName;
        this.mark = mark;
        this.masterEndDate = masterEndDate;
        this.pokeId = pokeId;
    }


    /*get getSmallDescription(): string {
        return this.smallDescription;
    }

    set setSmallDescription(value: string) {
        this.smallDescription = value;
    }

    get getBigDescription(): string {
        return this.bigDescription;
    }

    set setBigDescription(value: string) {
        this.bigDescription = value;
    }

    get getStartDate(): Date {
        return this.startDate;
    }

    set setStartDate(value: Date) {
        this.startDate = value;
    }

    get getDueDate(): Date {
        return this.dueDate;
    }

    set setDueDate(value: Date) {
        this.dueDate = value;
    }

    get getStatus(): string {
        return this.status;
    }

    set setStatus(value: string) {
        this.status = value;
    }

    get getMaster(): number {
        return this.master;
    }

    set setMaster(value: number) {
        this.master = value;
    }

    get getMasterProfession(): string {
        return this.masterProfession;
    }

    set setMasterProfession(value: string) {
        this.masterProfession = value;
    }


    get getMasterName(): string {
        return this.masterName;
    }

    set setMasterName(value: string) {
        this.masterName = value;
    }

    get getMark(): number {
        return this.mark;
    }

    set setMark(value: number) {
        this.mark = value;
    }

    get getMasterEndDate(): Date {
        return this.masterEndDate;
    }

    set setMasterEndDate(value: Date) {
        this.masterEndDate = value;
    }

    get getPokeId(): number {
        return this.pokeId;
    }

    set setPokeId(value: number) {
        this.pokeId = value;
    }*/
}
