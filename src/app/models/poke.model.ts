import {User} from './user.model';

export class Poke extends User {
    constructor(name: string, description: string, object_id: number, location: string, userDescription: string,
                phoneNumber: string, password: string, picture: string, isUserBlocked: boolean) {
        super(name, description, object_id, location, userDescription, phoneNumber, password, picture, isUserBlocked);
    }
}
