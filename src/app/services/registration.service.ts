import {Http} from "@angular/http";
import {User} from "../models/user.model";
import {url} from "../common/consts";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class RegistrationService{


    constructor(private http: Http, private router: Router){
    }

    reg(user: User){
        this.http.post(url + "register", user).subscribe(response => {
          if (response.status == 200){
            this.router.navigate(['authorization']);
          } else if (response.status == 500) {
            alert(response.statusText);
          }
        });
    }
}
