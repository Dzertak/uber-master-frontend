import {Http, RequestOptions, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'
import {ActivatedRoute} from "@angular/router";
import {AuthorizeService, url} from  "../index";
import {Convertator} from "./convertator.service";
import {Poke} from "../models/poke.model";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class PokeService {

	options: RequestOptions;

    constructor(private http:Http, private authorizeService:AuthorizeService) { 
		const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization", "UberToken "+this.authorizeService.getToken());
        this.options = new RequestOptions({headers: headers});
		};


    public getPokeList() {
        return this.http.get('http://localhost:8090/entities/getTypedEntities?class=Poke', this.options)
            .map(response => response.json())
    }
	
	public getPoke(id: string){
        return this.http.get(url+"entities/getEntity?id="+id+"&class=Poke", this.options)
            .map(response => response.json())
            .map(response => {
                return Convertator.toPoke(response);
            });
    }
	
	public getPokeOrders(id: string){
        return this.http.get(url+"entities/getPokeOrders?id="+id, this.options)
            .map(response => response.json())
           /*  .map(response => {
                return Convertator.toOr(resderponse);
            }); */
    }
	
	public updatePoke(poke: Poke){
		return this.http.post(url+"entities/updatePoke", poke,this.options)
            .catch(this._errorHandler);
	}
	
	/* public blockPoke(poke: Poke){
		poke.blocked = true;
		this.http.post(url+"entities/updatePoke", poke,this.options).subscribe(result =>{
            alert(result)
        })
	} */

    _errorHandler(error: Response){
        console.error(JSON.parse(JSON.stringify(error.json())));
        var obj = JSON.parse(JSON.stringify(error.json()));
        return Observable.throw(obj.message);
    }

}