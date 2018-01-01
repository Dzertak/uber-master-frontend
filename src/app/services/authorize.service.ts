import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'



@Injectable()
export class AuthorizeService {

    url: String;
    private isUserLoggedIn;
    public username;

    constructor() {
        this.isUserLoggedIn = false;
    };


    setUserLoggedIn() {
        this.isUserLoggedIn = true;
        this.username = 'admin';
    }

    getUserLoggedIn() {
        return this.isUserLoggedIn;
    }


    /*public getAuthorizeUser() {
        return this.http.get('http://localhost:8090/entities/getUser?phone=380456111789&password=easy_password3')
            .map(response => response.json())
            .map(response => {
                return {
                    name: response.name,
                    location: response.location
                }
            })
           /* .map(users => {
                return users.map(u => {
                    return {
                        name: u.name,
                        location: u.location
                    }
                })
            })
    }*/
}
