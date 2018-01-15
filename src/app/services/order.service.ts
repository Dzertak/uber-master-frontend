import {Http, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'
import {AuthorizeService, url} from "../index";
import {Headers} from '@angular/http';
import {Convertator} from "./convertator.service";
import {Master} from "../models/master.model";
import {Order} from "../models/order.model";
import {User} from "../models/user.model";



@Injectable()
export class OrderService {

    options: RequestOptions;

    constructor(private http:Http, private authorizeSerice:AuthorizeService) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization", "UberToken "+this.authorizeSerice.getToken());
        this.options = new RequestOptions({headers: headers});
    };


    public getOrderList() {

        return this.http.get('http://localhost:8090/entities/getTypedEntity?class=Order', this.options)
            .map(response => response.json())
    }

    public getOrder(id: string){
        return this.http.get(url+"entities/getEntity?id="+id+"&class=Order", this.options)
            .map(response => response.json())
            .map(response => {
                return Convertator.toOrder(response);
            });
    }

    public updateOrderByMaster(order: Order, user: User){
        order.master=user.object_id;
        order.status="In processing";
        this.http.post(url+"entity/updateOrder", order).subscribe(result =>{
            alert(result)
        })
    }
	
	/* public deleteOrder(id: string){
        return this.http.delete(url+"deleteEntity?id="+id, this.options)
            .map(response => response.json())
    } */
}