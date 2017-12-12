import {BaseEntity} from './baseentity.model';

export class Order extends BaseEntity {
    private _smallDescription: String;
    private _bigDescription: String;
    private _startDate: Date;
    private _dueDate: Date;
    private _status: String;
    private _master: number;


    constructor(name: String, description: String, object_id: number, smallDescription: String, bigDescription: String,
                startDate: Date, dueDate: Date, status: String, master: number) {
        super(name, description, object_id);
        this._smallDescription = smallDescription;
        this._bigDescription = bigDescription;
        this._startDate = startDate;
        this._dueDate = dueDate;
        this._status = status;
        this._master = master;
    }


    get smallDescription(): String {
        return this._smallDescription;
    }

    set smallDescription(value: String) {
        this._smallDescription = value;
    }

    get bigDescription(): String {
        return this._bigDescription;
    }

    set bigDescription(value: String) {
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

    get status(): String {
        return this._status;
    }

    set status(value: String) {
        this._status = value;
    }

    get master(): number {
        return this._master;
    }

    set master(value: number) {
        this._master = value;
    }
}
