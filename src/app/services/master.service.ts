import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'



@Injectable()
export class MasterService {



    constructor(private http:Http) {};


    public getMasterList() {
        return this.http.get('http://localhost:8090/entities/getTypedEntity?class=Master')
            .map(response => response.json())
    }
}