import {User} from './user.model';

export class Admin extends User {
    constructor(name: string, description: string, object_id: number, location: string,
                userDescription: string, phoneNumber: string, picture: string, classType: string) {
        super(name, description, object_id, location, userDescription, phoneNumber, picture, classType);
    }
}
