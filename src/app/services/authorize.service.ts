import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'


import {Observable} from "rxjs/Observable";
import {Convertator, User, Pair, url} from "../index";
declare var $:any;

@Injectable()
export class AuthorizeService {

    private isUserLoggedIn;
    public username;
    private authPair;
    private user;

    private token: string;
    private status: number = 0;

    private static http: Http;

    constructor(private http: Http) {
        AuthorizeService.http = http;
        const mySanya = sessionStorage.getItem('userState');
        if (mySanya){
            const outSession = JSON.parse(mySanya);
            this.authPair = outSession.authPair || '';
            this.user = outSession.user || '';
        }
    };


    /*etUserLoggedIn(status: boolean, user: User) {
        this.isUserLoggedIn = status;
        this.username = 'admin';
        this.user = user;
        sessionStorage.setItem('userState', JSON.stringify({status:this.isUserLoggedIn,username:this.username, user:this.user}));
    }*/

    signIn(authPair: Pair, user:User){
        this.user = user;
        this.authPair = authPair;
        sessionStorage.setItem('userState', JSON.stringify({authPair:authPair, user:user}));
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

    public login(authPair: Pair, phone: string, password: string) {
        this.setAuthPair(authPair);
        return this.http.post(url+"login",{phoneNumber: "753119477325", password: "9kmDM77InARDap6IHsDXKy1c"})
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
            });

    }
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
     logout(): void {
        this.token = null;
        this.status = 0;
        this.authPair = null;
        this.user = null;
    }

     getToken(): string {
        return this.token;
    }

     getStatus(): number {
        return this.status;
    }

     setAuthPair(authPair: Pair){
        this.authPair = authPair;
        if (this.authPair.first == 200) {
            this.authPair.second = authPair.second;
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
