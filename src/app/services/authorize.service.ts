import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'
import any = jasmine.any;
import {Pair} from "../common/pair";
import { url } from "./../common/consts";
import {User} from "../models/user.model";
import {Observable} from "rxjs/Observable";
import {Convertator} from "./convertator.service";
declare var $:any;

@Injectable()
export class AuthorizeService {

    private isUserLoggedIn;
    public username;

    private static token: string;
    private static status: number = 0;

    private static http: Http;

    constructor(private http: Http) {

        AuthorizeService.http = http;

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


    public auth(phone: string, password: string) {
       return this.http.post(url+"auth",{phoneNumber: phone, password: password})
            .map(response => {
                let authPair: Pair = new Pair();
                authPair.setFirst(response.status);
                if (authPair.first == 200)
                    authPair.setSecond(response.json().token);
                return authPair;
            });
    }

    /*public login(phone: string, password: string): Observable<any> {
        return this.http.post(url+"login",{phoneNumber: phone, password: password})
            .map(response => response.json())
            .map(response => {
                if (response.classType == 'ubermaster.entity.model.Poke'){
                    return Convertator.toPoke(response)
                }
                if (response.classType == 'ubermaster.entity.model.Master'){
                    return Convertator.toMaster(response)
                }
                if (response.classType == 'ubermaster.entity.model.Admin'){
                    return Convertator.toAdmin(response)
                }

            })
    }*/
   /* static refreshToken(): void {
        if (AuthorizeService.token != null) {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append("X-Auth-Token", AuthorizeService.token);
            this.http.get(url + "auth/refresh", {headers: headers})
                .map(response => {
                    let authPair: Pair = new Pair();
                    authPair.setFirst(response.status);
                    if (authPair.first == 200)
                        authPair.setSecond(response.json().token);
                    return authPair;
                })
                .subscribe(value => {
                    let authPair: Pair = value;
                    AuthorizeService.status = value.first;
                    if (AuthorizeService.status == 200) {
                        AuthorizeService.token = value.second;
                    }
                });
        }
    }
*/
    static logout(): void {
        this.token = null;
        this.status = 0;
    }

    static getToken(): string {
        return AuthorizeService.token;
    }

    static getStatus(): number {
        return AuthorizeService.status;
    }

    static setToken(status: number, token: string){
        AuthorizeService.status = status;
        if (AuthorizeService.status == 200) {
            AuthorizeService.token = token;
        }
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
