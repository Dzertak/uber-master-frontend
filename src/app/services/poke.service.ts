import {Http, RequestOptions, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'
import {ActivatedRoute} from "@angular/router";
import {AuthorizeService, url} from  "../index";
import {Convertator} from "./convertator.service";
import {Poke} from "../models/poke.model";


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
        return this.http.get('http://localhost:8090/entities/getTypedEntity?class=Poke', this.options)
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
		this.http.post(url+"entities/updatePoke", poke).subscribe(result =>{
            alert(result)
        })
	}
	

}