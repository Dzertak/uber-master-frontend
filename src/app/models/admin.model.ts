import {User} from './user.model';

export class Admin extends User {
    constructor(name: String, description: String, object_id: number, location: String,
                userDescription: String, phoneNumber: String, password: String, picture: String) {
        super(name, description, object_id, location, userDescription, phoneNumber, password, picture);
    }
}
