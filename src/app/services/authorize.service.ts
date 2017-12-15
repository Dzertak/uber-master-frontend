import {Http} from '@angular/http';
import {Injectable} from '@angular/core';



@Injectable()
export class AuthorizeService {

    url: String;

    constructor(private http: Http) { };

    public getAuthorizeUser() {
        return this.http.get('https://jsonplaceholder.typicode.com/users')
            .map(response => response.json());
    }
}
