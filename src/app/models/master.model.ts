import {User} from './user.model';
import {BlockeduserModel} from "./blockeduser.model";

export class Master extends BlockeduserModel {
    private profession: string;
    private skills: string;
    private experience: string;
    private payment: number;
    private smoke: boolean;
    private tools: string;
    private start_time: number;
    private end_time: number;
    private averMark: number;

    constructor(name: string, description: string, object_id: number, location: string, userDescription: string,
                phoneNumber: string, password:string, picture: string, blocked: boolean,
                profession: string, skills: string, experience: string, payment: number, smoke: boolean,
                tools: string, start_time: number, end_time: number, averMark: number) {
        super(name, description, object_id, location, userDescription,
            phoneNumber, password, picture, "Master", blocked);
        this.profession = profession;
        this.skills = skills;
        this.experience = experience;
        this.payment = payment;
        this.smoke = smoke;
        this.tools = tools;
        this.start_time = start_time;
        this.end_time = end_time;
        this.averMark = averMark;
    }


    get getProfession(): string {
        return this.profession;
    }

    set setProfession(value: string) {
        this.profession = value;
    }

    get getSkills(): string {
        return this.skills;
    }

    set setSkills(value: string) {
        this.skills = value;
    }

    get getExperience(): string {
        return this.experience;
    }

    set setExperience(value: string) {
        this.experience = value;
    }

    get getPayment(): number {
        return this.payment;
    }

    set setPayment(value: number) {
        this.payment = value;
    }

    get getSmoke(): boolean {
        return this.smoke;
    }

    set setSmoke(value: boolean) {
        this.smoke = value;
    }

    get getTools(): string {
        return this.tools;
    }

    set setTools(value: string) {
        this.tools = value;
    }

    get getStart_time(): number {
        return this.start_time;
    }

    set setStart_time(value: number) {
        this.start_time = value;
    }

    get getEnd_time(): number {
        return this.end_time;
    }

    set setEnd_time(value: number) {
        this.end_time = value;
    }


    get getAverMark(): number {
        return this.averMark;
    }

    set setAverMark(value: number) {
        this.averMark = value;
    }
}
