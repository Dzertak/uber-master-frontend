import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'
import {Convertator, User, Pair, url} from "../index";
import {Router} from "@angular/router";
declare var $:any;

@Injectable()
export class AuthorizeService {

    private isUserLoggedIn = false;
    public username;
    private authPair: Pair;
    private user: User;

    private token: string;
    private status: number = 0;

    private static http: Http;

    constructor(private http: Http, private router: Router) {
        AuthorizeService.http = http;
        const mySanya = sessionStorage.getItem('userState');
        if (mySanya){
            const outSession = JSON.parse(mySanya);
            this.authPair = outSession.authPair || '';
            this.user = outSession.user || '';
            this.isUserLoggedIn = outSession.isUserLoggedIn || '';
            if (this.isUserLoggedIn){
                this.router.navigate(['/orders']);
            }
           /* if (this.authPair!=''){
                if (this.authPair!=null){
                    if (this.authPair.first==200){
                        this.router.navigate(['/orders'])
                    }
                }
            }*/
        }
    };


    setUserLoggedIn(status: boolean) {
        this.isUserLoggedIn = status;
    }

    getUserLoggedIn(){
        return this.isUserLoggedIn;
    }

    getUser(){
    return this.user;
    }

    //return entity format "ubermaster.entity.model.Master"
    getUserType(){
        //return this.user.classType;
		return "ubermaster.entity.model.Poke";//!!!!!!!!!
    }

    signIn(authPair: Pair, user:User){
        this.user = user;
        this.authPair = authPair;
        this.isUserLoggedIn = true;
        sessionStorage.setItem('userState', JSON.stringify({isUserLoggedIn:this.isUserLoggedIn,authPair:authPair, user:user}));
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
         this.isUserLoggedIn = false;
        this.token = null;
        this.status = 0;
        this.authPair = null;
        this.user = null;
        sessionStorage.setItem('userState', JSON.stringify({isUserLoggedIn:this.isUserLoggedIn,authPair:this.authPair, user:this.user}));

     }

     getToken(): string {
        return this.authPair.second;
    }

     getStatus(): number {
        return this.authPair.first;
    }

     setAuthPair(authPair: Pair){
        this.authPair = authPair;
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
