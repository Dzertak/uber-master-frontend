import {BaseEntity} from './baseentity.model';

export class User extends BaseEntity {
   private _location: String;
   private _userDescription: String;
   private _phoneNumber: String;
   private _password: String;
   private _picture: String;

   constructor(name: String, description: String, object_id: number, location: String, userDescription: String,
                phoneNumber: String, password: String, picture: String) {
        super(name, description, object_id);
        this._location = location;
        this._userDescription = userDescription;
        this._phoneNumber = phoneNumber;
        this._password = password;
        this._picture = picture;
    }


    get location(): String {
        return this._location;
    }

    set location(value: String) {
        this._location = value;
    }

    get userDescription(): String {
        return this._userDescription;
    }

    set userDescription(value: String) {
        this._userDescription = value;
    }

    get phoneNumber(): String {
        return this._phoneNumber;
    }

    set phoneNumber(value: String) {
        this._phoneNumber = value;
    }

    get password(): String {
        return this._password;
    }

    set password(value: String) {
        this._password = value;
    }

    get picture(): String {
        return this._picture;
    }

    set picture(value: String) {
        this._picture = value;
    }
}
