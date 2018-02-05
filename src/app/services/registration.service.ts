import {Http} from "@angular/http";
import {User} from "../models/user.model";
import {url} from "../common/consts";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class RegistrationService{


    constructor(private http: Http, private router: Router){
    }

    reg(user: User, userType: string){
        if (userType == 'Poke'){
            return this.http.post(url + "registerPoke", user)
                .catch(this._errorHandler);
            }
		else {
           return this.http.post(url + "registerMaster", user)
               .catch(this._errorHandler);
        }

    }
	
	_errorHandler(error: Response){
		console.error(JSON.parse(JSON.stringify(error.json())));
		var obj = JSON.parse(JSON.stringify(error.json()));
		 return Observable.throw(obj.message);
	}
}
