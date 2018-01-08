import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'
import { JwtHelperService } from '@auth0/angular-jwt';
import any = jasmine.any;


@Injectable()
export class AuthorizeService {

    url: String;
    private isUserLoggedIn;
    public username;

    constructor(private http: Http) {

        const mySanya = sessionStorage.getItem('userStatus');
        if (mySanya){
            const outSession = JSON.parse(mySanya);
            this.isUserLoggedIn = outSession.status || '';
            this.username = outSession.username || '';
        }
    };


    setUserLoggedIn(status: boolean) {
        this.isUserLoggedIn = status;
        this.username = 'admin';
        sessionStorage.setItem('userStatus', JSON.stringify({status:this.isUserLoggedIn,username:this.username}));
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



   /* public getAuthorizeUser() {
        return this.http.get('http://localhost:8090/entities/getUser?phone=500282531872&password=yGypB4E2WUH')
            .map(response => response.json())
            /*.map(response => {
                return {
                    name: response.name,
                    location: response.location
                }
            })
            .map(users => {
                return users.map(u => {
                    return {
                        name: u.name,
                        location: u.location
                    }
                })
            })
    }*/
}
