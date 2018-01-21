import {Component, NgModule, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import * as  Cloudinary from 'cloudinary-core';
import { FileUploader } from 'ng2-file-upload';
import {RegistrationService} from "../../services/registration.service";
import {User} from "../../models/user.model";
import {Poke} from "../../models/poke.model";
import {Master} from "../../models/master.model";

const URL = 'https://api.cloudinary.com/v1_1/ubermaster/image/upload';

declare var $:any;

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url: URL});
  swipe: number = 0
  picturePoke: string;
  firstNamePoke: string;
  lastNamePoke: string;
  phoneNumberPoke: string;
  locationPoke: string;
  userDescriptionPoke: string;
  passwordPoke: string;
  confirmPasswordPoke: string;

  pictureMaster: string;
  firstNameMaster: string;
  lastNameMaster: string;
  phoneNumberMaster: string;
  locationMaster: string;
  userDescriptionMaster: string;
  passwordMaster: string;
  confirmPasswordMaster: string;
  profession: string;
  tools: string;
  skills: string;
  experience: string;
  startTime: number;
  endTime: number;
  payment: number;
  smoke: boolean;

  variable: {phoneNumber, pass}

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
    if (this.firstNamePoke != "" && this.lastNamePoke != "" && this.phoneNumberPoke != ""
      && this.passwordPoke != "" && this.confirmPasswordPoke != "" && this.locationPoke != "") {
      if (this.passwordPoke == this.confirmPasswordPoke) {
        let poke = new Poke(this.firstNamePoke + " " + this.lastNamePoke, null, null, this.locationPoke,
          this.userDescriptionPoke, this.phoneNumberPoke, this.passwordPoke, this.picturePoke, false);
        this.registrationService.reg(poke);
      } else {
        //error
      }
    } else {
      //error
    }
    /*.subscribe(response => {
      if (response.status==200){
        this.router.navigate(['authorization']);
      }
    });*/
  }

  signUpMaster(){
    if (this.firstNameMaster != "" && this.lastNameMaster != "" && this.phoneNumberMaster != ""
      && this.passwordMaster != "" && this.confirmPasswordMaster != "" && this.locationMaster != ""
      && this.profession != "" && this.experience != "") {
      if (this.passwordMaster == this.confirmPasswordMaster) {
        let master = new Master(this.firstNameMaster + " " + this.lastNameMaster, null, null, this.locationMaster,
          this.userDescriptionMaster, this.phoneNumberMaster, this.passwordMaster, this.pictureMaster, false,
          this.profession, this.skills, this.experience, this.payment, this.smoke, this.tools, this.startTime, this.endTime);
        this.registrationService.reg(master);
      } else {
        //error
      }
    } else {
      //error
    }
  }

  uploadImage(nameImage: String){
    this.uploader.autoUpload(nameImage,
      function(error, result) {console.log(result); });
  }

}
