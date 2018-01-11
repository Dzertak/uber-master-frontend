import {Http, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'
import {AuthorizeService, url} from "../index";
import {Headers} from '@angular/http';



@Injectable()
export class OrderService {



    constructor(private http:Http, private authorizeSerice:AuthorizeService) {};


    public getOrderList() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization", "UberToken "+this.authorizeSerice.getToken());
        const options = new RequestOptions({headers: headers});
        return this.http.get('http://localhost:8090/entities/getTypedEntity?class=Order', options)
            .map(response => response.json())
    }
}