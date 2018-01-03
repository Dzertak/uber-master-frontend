import {User} from './user.model';

export class Master extends User {
    private _profession: string;
    private _skills: string;
    private _experience: string;
    private _payment: number;
    private _smoke: boolean;
    private _tools: string;
    private _start_time: Date;
    private _end_time: Date;


    constructor(name: string, description: string, object_id: number, location: string, userDescription: string,
                phoneNumber: string, password: string, picture: string,
                profession: string, skills: string, experience: string, payment: number, smoke: boolean,
                tools: string, start_time: Date, end_time: Date) {
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


    get profession(): string {
        return this._profession;
    }

    set profession(value: string) {
        this._profession = value;
    }

    get skills(): string {
        return this._skills;
    }

    set skills(value: string) {
        this._skills = value;
    }

    get experience(): string {
        return this._experience;
    }

    set experience(value: string) {
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

    get tools(): string {
        return this._tools;
    }

    set tools(value: string) {
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
