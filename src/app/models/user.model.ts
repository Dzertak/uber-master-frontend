import {BaseEntity} from './baseentity.model';

export class User extends BaseEntity {
   private _location: string;
   private _userDescription: string;
   private _phoneNumber: string;
   private _password: string;
   private _picture: string;
   private _isUserBlocked: boolean;

   constructor(name: string, description: string, object_id: number, location: string, userDescription: string,
                phoneNumber: string, password: string, picture: string, isUserBlocked: boolean) {
        super(name, description, object_id);
        this._location = location;
        this._userDescription = userDescription;
        this._phoneNumber = phoneNumber;
        this._password = password;
        this._picture = picture;
        this._isUserBlocked = this._isUserBlocked;
    }


    get location(): string {
        return this._location;
    }

    set location(value: string) {
        this._location = value;
    }

    get userDescription(): string {
        return this._userDescription;
    }

    set userDescription(value: string) {
        this._userDescription = value;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get picture(): string {
        return this._picture;
    }

    set picture(value: string) {
        this._picture = value;
    }


    get isUserBlocked(): boolean {
        return this._isUserBlocked;
    }

    set isUserBlocked(value: boolean) {
        this._isUserBlocked = value;
    }
}
