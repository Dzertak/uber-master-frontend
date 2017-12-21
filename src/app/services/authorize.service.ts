import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'



@Injectable()
export class AuthorizeService {

    url: String;

    constructor(private http: Http) { };

    public getAuthorizeUser() {
        return this.http.get('http://localhost:8090/entities/getUser?phone=380456111789&password=easy_password3')
            /*.map(response => response.json())
            .map(response => response.results)
            .map(users => {
                return users.map(u => {
                    return {
                        name: u.name.first + ' ' + u.name.last,
                        image: u.picture.large,
                        geo: u.location.city
                    }
                })
            })*/
    }
}
