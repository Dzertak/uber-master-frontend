import { Component, OnInit } from '@angular/core';
import {AuthorizeService} from '../../services/authorize.service';


import {Router} from "@angular/router";

declare var $:any;
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.css'],

})
export class AuthorizationPageComponent implements OnInit {

    isFail: boolean = true;
    phone: String;
    pass: String;
 // masterTest: MasterTestModel;

  constructor(private router: Router, private authorizeService: AuthorizeService) { }

  ngOnInit() {
   /* this.authorizeService.getAuthorizeUser().subscribe(user => {

      this.masterTest.location = user.location;
    })*/
  }

  /*authorize(){
    this.showFailedAuthorization();
  }*/

  showFailedAuthorization() {
      $('#authorization-fail-message').removeClass('hidden');
     // this.isFail=false;
  }

  /*hideFailedAuthorization(){
      this.isFail=false;
  }*/

  registration(){
      this.router.navigate(['registration']);
  }


  loginUser(){
   /* e.preventDefault();
    console.log(e);
    /*var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;*/
    console.log(this.phone);
    console.log(this.pass);

    if(this.phone == 'admin' && this.pass == 'admin') {
        this.isFail=false;
        this.authorizeService.setUserLoggedIn(true);
        this.router.navigate(['orders']);
    }
    else {
        this.showFailedAuthorization();
    }
}
}
