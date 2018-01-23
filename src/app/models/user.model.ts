import {BaseEntity} from './baseentity.model';

export class User extends BaseEntity {
   location: string;
   userDescription: string;
   phoneNumber: string;
   password: string;
   picture: string;
   classType: string;

   constructor(name: string, description: string, object_id: number, location: string, userDescription: string,
                phoneNumber: string, password: string, picture: string, classType: string) {
        super(name, description, object_id);
        this.location = location;
        this.userDescription = userDescription;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.picture = picture;
        this.classType = classType;
    }


   /* get getLocation(): string {
        return this.location;
    }

    set setLocation(value: string) {
        this.location = value;
    }

    get getUserDescription(): string {
        return this.userDescription;
    }

    set setUserDescription(value: string) {
        this.userDescription = value;
    }

    get getPhoneNumber(): string {
        return this.phoneNumber;
    }

    set setPhoneNumber(value: string) {
        this.phoneNumber = value;
    }


    get getPassword(): string {
        return this.password;
    }

    set setPassword(value: string) {
      this.password = value;
    }

    get getPicture(): string {
        return this.picture;
    }

    set setPicture(value: string) {
        this.picture = value;
    }

    get getClassType(): string {
        return this.classType;
    }

    set setClassType(value: string) {
        this.classType = value;
    }*/
}
