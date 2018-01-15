import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { CloudinaryModule } from '@cloudinary/angular-4.x';
import * as  Cloudinary from 'cloudinary-core';
CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'ubermaster'});

declare var $:any;

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  swipe: number = 0;


  constructor(private router: Router) {}

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
  /*uploadImage(nameImage: String){
    Cloudinary.v2.uploader.upload(nameImage,
      function(error, result) {console.log(result); });
  }*/

}
