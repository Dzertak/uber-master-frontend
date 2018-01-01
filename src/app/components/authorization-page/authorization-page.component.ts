import { Component, OnInit } from '@angular/core';
import {AuthorizeService} from '../../services/authorize.service';
import {log} from 'util';

import {RegistrationPageComponent} from "../registration-page/registration-page.component";
import {$} from "protractor";
import {Router} from "@angular/router";

const routes = [
    {path: 'registration', component: RegistrationPageComponent},

];

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.css'],
    providers: [AuthorizeService]
})
export class AuthorizationPageComponent implements OnInit {

    phone: String;
    pass: String;
 // masterTest: MasterTestModel;

  constructor(private router:Router, private authorizeService: AuthorizeService) { }

  ngOnInit() {
   /* this.authorizeService.getAuthorizeUser().subscribe(user => {

      this.masterTest.location = user.location;
    })*/
  }

  /*authorize(){
    this.showFailedAuthorization();
  }*/

  /*showFailedAuthorization() {
        $('#authorization-fail-message').removeClass('hidden');
    }*/
  loginUser(){
   /* e.preventDefault();
    console.log(e);
    /*var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;*/
    console.log(this.phone);
    console.log(this.pass);

    if(this.phone == 'admin' && this.pass == 'admin') {
        this.authorizeService.setUserLoggedIn();
        this.router.navigate(['main']);
    }
}
}
