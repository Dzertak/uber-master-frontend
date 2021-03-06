import { Component, OnInit } from '@angular/core';
import {AuthorizeService} from "../../index";
import {Router} from "@angular/router";
import 'rxjs/add/operator/finally';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';

declare var $:any;

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.css'],

})
export class AuthorizationPageComponent implements OnInit {

    isFail: boolean = true;
    phone: string;
    pass: string;
    isLoading: boolean = false;

  constructor(private router: Router, private authorizeService: AuthorizeService) { }

  ngOnInit() {
    if (this.authorizeService.getUserLoggedIn()) {
      this.router.navigate(['orders']);
    }

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

	errMsg: string;

  loginUser(){
      this.isLoading = true;
      //work
      this.authorizeService.auth(this.phone, btoa(this.pass)).subscribe( authPair => {
          if (authPair.first==200 && authPair.first != null){
              this.authorizeService.login(authPair, this.phone, btoa(this.pass)).subscribe(user => {
                  this.authorizeService.signIn(authPair, user);
                  this.isFail=false;
                  this.isLoading = false;
                  this.router.navigate(['orders']);
              }, responseErrorMessage => {
                  this.isLoading = false;
                  this.errMsg = responseErrorMessage;
                      this.showFailedAuthorization();});
          }  else {
              this.isLoading = false;
              this.showFailedAuthorization();
          }
      }, responseError => {
          this.errMsg = responseError;
          this.isLoading = false;
          this.showFailedAuthorization();
      });

      //for test
      /*this.authorizeService.setUserLoggedIn(true);
      this.router.navigate(['orders']);*/
  }
}
