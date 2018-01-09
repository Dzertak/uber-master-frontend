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
    phone: string;
    pass: string;


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

     /* this.authorizeService.auth(this.phone,this.pass).subscribe( authPair => {
          AuthorizeService.setToken(authPair.first,authPair.second);
          if (AuthorizeService.getStatus()==200){*/
                  this.isFail=false;
                  this.authorizeService.setUserLoggedIn(true);
                  this.router.navigate(['orders']);
          /*}  else {
              this.showFailedAuthorization();
          }
      });*/
  /*finally(() => {
          if (AuthorizeService.status == 200)
              $('#authorization-modal').modal('hideDimmer');

          else
              $('#authorization-fail-message').removeClass('hidden');
      }).subscribe(value => {
          AuthorizeService.status = value.first;
          if (AuthorizeService.status == 200) {
              AuthorizeService.token = value.second;
          }
      });*/
  }
}
