import {Http, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'
import {AuthorizeService, url} from "../index";
import {Headers} from '@angular/http';
import {Convertator} from "./convertator.service";
import {Master} from "../models/master.model";
import {Order} from "../models/order.model";
import {User} from "../models/user.model";
import {Observable} from "rxjs/Observable";



@Injectable()
export class OrderService {

    options: RequestOptions;

    constructor(private http: Http, private authorizeSerice:AuthorizeService) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization", "UberToken "+this.authorizeSerice.getToken());
        this.options = new RequestOptions({headers: headers});
    };


    public getOrderList() {
        return this.http.get(url+'entities/getOrdersByStatus?status='+'New', this.options)
            .map(response => response.json())
    }
	
	public getWholeOrderList() {
        return this.http.get(url+'entities/getTypedEntities?class=Order', this.options)
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
        console.log(order);
        return this.http.post(url+"entities/updateOrder", order, this.options);
    }
	
	public updateOrderByPoke(order: Order, user: User){
		order.pokeId=user.object_id;
        order.status="Completed";
        console.log(order);
        this.http.post(url+"entities/updateOrder", order, this.options).subscribe(result =>{
            alert(result)
        })
    }
	
	public completeOrderByMaster(order: Order){
	    console.log(order)
        order.status="Master done";
	    order.masterEndDate = new Date();
        this.http.post(url+"entities/updateOrder", order, this.options).subscribe(result =>{
            alert(result)
        })
    }

	 public deleteOrder(id: string){
        this.http.delete(url+"entities/deleteEntity?id="+id, this.options).subscribe(result =>{
            alert(result)
        })
    }

    public createOder(order: Order){
	     return this.http.post(url+"entities/addOrder",order,this.options)
             .map(response => response.json())
             .catch((err) => {
                 return Observable.throw(new Error(`${ err.status } ${ err.statusText }`))
             });
    }

}
