import {User} from './user.model';
import {BlockeduserModel} from "./blockeduser.model";

export class Poke extends BlockeduserModel {
    constructor(name: string, description: string, object_id: number, location: string, userDescription: string,
                phoneNumber: string, password: string, picture: string, isUserBlocked: boolean) {
        super(name, description, object_id, location, userDescription, phoneNumber, password, picture, isUserBlocked);
    }
}
