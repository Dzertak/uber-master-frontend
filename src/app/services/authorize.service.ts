import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class AuthorizeService {

    url: String;
    private isUserLoggedIn;
    public username;

    constructor(/*public jwtHelper: JwtHelperService*/) {
        this.isUserLoggedIn = false;
    };


    setUserLoggedIn(status: boolean) {
        this.isUserLoggedIn = status;
        this.username = 'admin';
    }

    getUserLoggedIn() {
        return this.isUserLoggedIn;
    }

    /*public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        return !this.jwtHelper.isTokenExpired(token);
    }*/



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
