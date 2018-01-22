import {User} from "./user.model";

export class BlockeduserModel extends User{

    private blocked: boolean;
    constructor(name: string, description: string, object_id: number, location: string, userDescription: string,
                phoneNumber: string, password: string, picture: string, classType: string, blocked: boolean){
        super(name,description,object_id,location,userDescription,
            phoneNumber, password, picture,classType);
        this.blocked=blocked;
    }


    get getIsBlocked(): boolean {
        return this.blocked;
    }

    set setIsBlocked(value: boolean) {
        this.blocked = value;
    }
}
