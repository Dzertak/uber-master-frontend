import {Http, RequestOptions, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'
import {AuthorizeService} from "./authorize.service";



@Injectable()
export class MasterService {



    constructor(private http:Http, private authorizeSerice:AuthorizeService) {};


    public getMasterList() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization", "UberToken "+this.authorizeSerice.getToken());
        const options = new RequestOptions({headers: headers});
        return this.http.get('http://localhost:8090/entities/getTypedEntity?class=Master', options)
            .map(response => response.json())
    }

}