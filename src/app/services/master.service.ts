import {Http, RequestOptions, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'
import {ActivatedRoute} from "@angular/router";
import {AuthorizeService, url} from  "../index";
import {Convertator} from "./convertator.service";
import {Master} from "../models/master.model";


@Injectable()
export class MasterService {

	options: RequestOptions;

    constructor(private http:Http, private authorizeSerice:AuthorizeService) { 
		const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization", "UberToken "+this.authorizeSerice.getToken());
        this.options = new RequestOptions({headers: headers});
		};


    public getMasterList() {
        return this.http.get('http://localhost:8090/entities/getTypedEntity?class=Master', this.options)
            .map(response => response.json())
    }
	
	public getMaster(id: string){
        return this.http.get(url+"entities/getEntity?id="+id+"&class=Master", this.options)
            .map(response => response.json())
            .map(response => {
                return Convertator.toMaster(response);
            });
    }
	
	public getMasterOrders(id: string){
        return this.http.get(url+"entities/getMasterOrders?id="+id, this.options)
            .map(response => response.json())
           /*  .map(response => {
                return Convertator.toOr(resderponse);
            }); */
    }
	
	public updateMaster(master: Master){
		this.http.post(url+"entities/updateMaster", master).subscribe(result =>{
            alert(result)
        })
	}

}