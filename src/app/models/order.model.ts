import {BaseEntity} from './baseentity.model';

export class Order extends BaseEntity {
    private _smallDescription: string;
    private _bigDescription: string;
    private _startDate: Date;
    private _dueDate: Date;
    private _status: string;
    private _master: number;


    constructor(name: string, description: string, object_id: number, smallDescription: string, bigDescription: string,
                startDate: Date, dueDate: Date, status: string, master: number) {
        super(name, description, object_id);
        this._smallDescription = smallDescription;
        this._bigDescription = bigDescription;
        this._startDate = startDate;
        this._dueDate = dueDate;
        this._status = status;
        this._master = master;
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
}
