import {BaseEntity} from './baseentity.model';

export class User extends BaseEntity {
   private _location: string;
   private _userDescription: string;
   private _phoneNumber: string;
   private _password: string;
   private _picture: string;
   private _classType: string;

   constructor(name: string, description: string, object_id: number, location: string, userDescription: string,
                phoneNumber: string, password: string, picture: string, classType: string) {
        super(name, description, object_id);
        this._location = location;
        this._userDescription = userDescription;
        this._phoneNumber = phoneNumber;
        this._password = password;
        this._picture = picture;
        this._classType = classType;
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

    get classType(): string {
        return this._classType;
    }

    set classType(value: string) {
        this._classType = value;
    }
}
