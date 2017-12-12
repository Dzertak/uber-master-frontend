import {User} from './user.model';

export class Master extends User {
    private _profession: String;
    private _skills: String;
    private _experience: String;
    private _payment: number;
    private _smoke: boolean;
    private _tools: String;
    private _start_time: Date;
    private _end_time: Date;


    constructor(name: String, description: String, object_id: number, location: String, userDescription: String,
                phoneNumber: String, password: String, picture: String,
                profession: String, skills: String, experience: String, payment: number, smoke: boolean,
                tools: String, start_time: Date, end_time: Date) {
        super(name, description, object_id, location, userDescription,
            phoneNumber, password, picture);
        this._profession = profession;
        this._skills = skills;
        this._experience = experience;
        this._payment = payment;
        this._smoke = smoke;
        this._tools = tools;
        this._start_time = start_time;
        this._end_time = end_time;
    }


    get profession(): String {
        return this._profession;
    }

    set profession(value: String) {
        this._profession = value;
    }

    get skills(): String {
        return this._skills;
    }

    set skills(value: String) {
        this._skills = value;
    }

    get experience(): String {
        return this._experience;
    }

    set experience(value: String) {
        this._experience = value;
    }

    get payment(): number {
        return this._payment;
    }

    set payment(value: number) {
        this._payment = value;
    }

    get smoke(): boolean {
        return this._smoke;
    }

    set smoke(value: boolean) {
        this._smoke = value;
    }

    get tools(): String {
        return this._tools;
    }

    set tools(value: String) {
        this._tools = value;
    }

    get start_time(): Date {
        return this._start_time;
    }

    set start_time(value: Date) {
        this._start_time = value;
    }

    get end_time(): Date {
        return this._end_time;
    }

    set end_time(value: Date) {
        this._end_time = value;
    }
}
