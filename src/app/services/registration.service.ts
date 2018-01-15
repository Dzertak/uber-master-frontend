import {Http} from "@angular/http";
import {User} from "../models/user.model";
import {url} from "../common/consts";
import {Router} from "@angular/router";


export class RegistrationService{


    constructor(private http: Http, private router: Router){
    }

    reg(user: User){
        this.http.post(url,user);

        /*
        * .subscribe(response => {
            if (response.status==200){
                this.router.navigate(['/'])
            }
        })
        * */
    }
}