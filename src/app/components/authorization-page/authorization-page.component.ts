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


  constructor(private router: Router, private authorizeService: AuthorizeService) { }

  ngOnInit() {
      $('.message .close').on('click', function () {
          $(this)
              .closest('.message')
              .transition('fade');
      });
  }


  showFailedAuthorization() {
      $('#authorization-fail-message').removeClass('hidden');
  }


  registration(){
      this.router.navigate(['registration']);
  }


  loginUser(){

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
