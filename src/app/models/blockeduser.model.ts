import {User} from "./user.model";

export class BlockeduserModel extends User{

    private _isUserBlocked: boolean;
    constructor(name: string, description: string, object_id: number, location: string, userDescription: string,
                phoneNumber: string, picture: string, classType: string, isUserBlocked: boolean){
        super(name,description,object_id,location,userDescription,
            phoneNumber, picture,classType);
        this._isUserBlocked=isUserBlocked;
    }


    get isUserBlocked(): boolean {
        return this._isUserBlocked;
    }

    set isUserBlocked(value: boolean) {
        this._isUserBlocked = value;
    }
}