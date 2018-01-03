import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'



@Injectable()
export class OrderService {



    constructor(private http:Http) {};


    public getOrderList() {
        return this.http.get('http://localhost:8090/entities/getTypedEntity?class=Order')
            .map(response => response.json())
    }
}