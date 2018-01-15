import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { CloudinaryModule } from '@cloudinary/angular-4.x';
import * as  Cloudinary from 'cloudinary-core';
import {RegistrationService} from "../../services/registration.service";
import {User} from "../../models/user.model";
CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'ubermaster'});

declare var $:any;

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  swipe: number = 0;
  user: User;

  constructor(private router: Router, private registrationService: RegistrationService) {}

  ngOnInit() {
  }

  authorization(){
    this.router.navigate(['authorization']);
  }

  swipeTab(tab: number){
    this.swipe = tab;
  }

  signUpPoke() {
    this.authorization();
  }

  signUpMaster(){
    this.signUpPoke();
  }
  
  registration(){

    /*this.user.name  =
    this.user.location  =
    this.user.phoneNumber  = */


    this.registrationService.reg(this.user)
  }

  /*uploadImage(nameImage: String){
    Cloudinary.v2.uploader.upload(nameImage,
      function(error, result) {console.log(result); });
  }*/

}
