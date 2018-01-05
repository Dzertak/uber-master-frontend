import {BaseEntity} from './baseentity.model';

export class Order extends BaseEntity {
    private _smallDescription: string;
    private _bigDescription: string;
    private _startDate: Date;
    private _dueDate: Date;
    private _status: string;
    private _master: number;
    private _masterProfession: string;


    constructor(name: string, description: string, object_id: number, smallDescription: string, bigDescription: string,
                startDate: Date, dueDate: Date, status: string, master: number, masterProfession: string) {
        super(name, description, object_id);
        this._smallDescription = smallDescription;
        this._bigDescription = bigDescription;
        this._startDate = startDate;
        this._dueDate = dueDate;
        this._status = status;
        this._master = master;
        this._masterProfession = masterProfession
    }


    get smallDescription(): string {
        return this._smallDescription;
    }

    set smallDescription(value: string) {
        this._smallDescription = value;
    }

    get bigDescription(): string {
        return this._bigDescription;
    }

    set bigDescription(value: string) {
        this._bigDescription = value;
    }

    get startDate(): Date {
        return this._startDate;
    }

    set startDate(value: Date) {
        this._startDate = value;
    }

    get dueDate(): Date {
        return this._dueDate;
    }

    set dueDate(value: Date) {
        this._dueDate = value;
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }

    get master(): number {
        return this._master;
    }

    set master(value: number) {
        this._master = value;
    }

    get masterProfession(): string {
        return this._masterProfession;
    }

    set masterProfession(value: string) {
        this._masterProfession = value;
    }
}
