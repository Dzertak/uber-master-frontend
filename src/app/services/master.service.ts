import {Http, RequestOptions, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'
import {ActivatedRoute} from "@angular/router";
import {AuthorizeService, url} from  "../index";
import {Convertator} from "./convertator.service";
import {Master} from "../models/master.model";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MasterService {

	options: RequestOptions;

    constructor(private http:Http, private authorizeService:AuthorizeService) { 
		const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization", "UberToken "+this.authorizeService.getToken());
        this.options = new RequestOptions({headers: headers});
		};


    public getMasterList() {
        return this.http.get('http://localhost:8090/entities/getTypedEntities?class=Master', this.options)
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
		return this.http.post(url+"entities/updateMaster", master,this.options)
            .catch(this._errorHandler);
	}
	
	public deleteMaster(id: string){
       return this.http.delete(url+"entities/deleteEntity?id="+id, this.options)
            .catch(this._errorHandler);
    }
	
	/* public blockMaster(master: Master){
		master.blocked = true;
		this.http.post(url+"entities/updateMaster", master,this.options).subscribe(result =>{
            alert(result)
        })
	} */

    _errorHandler(error: Response){
        console.error(JSON.parse(JSON.stringify(error.json())));
        var obj = JSON.parse(JSON.stringify(error.json()));
        return Observable.throw(obj.message);
    }

}