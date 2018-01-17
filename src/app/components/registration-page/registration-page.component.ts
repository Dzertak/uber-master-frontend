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
  swipe: number = 0;
  poke: Poke;
  picturePoke: string;
  firstNamePoke: string;
  lastNamePoke: string;
  phoneNumberPoke: string;
  locationPoke: string;
  userDescriptionPoke: string;
  passwordPoke: string;
  confirmPasswordPoke: string;

  master: Master;
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
      this.poke.name = this.firstNamePoke + " " + this.lastNamePoke;
      this.poke.picture = this.picturePoke;
      this.uploadImage(this.picturePoke);
      this.poke.phoneNumber = this.phoneNumberPoke;
      this.poke.location = this.locationPoke;
      this.poke.userDescription = this.userDescriptionPoke;
      this.poke.isUserBlocked = false;
      if (this.passwordPoke == this.confirmPasswordPoke) {
        this.poke.password = this.passwordPoke;
      } else {
        //error
      }
    } else {
      //error
    }

    this.registrationService.reg(this.poke);
    /*.subscribe(response => {
      if (response.status==200){
        this.router.navigate(['authorization']);
      }
    });*/
    this.authorization();
  }

  signUpMaster(){
    if (this.firstNameMaster != "" && this.lastNameMaster != "" && this.phoneNumberMaster != ""
      && this.passwordMaster != "" && this.confirmPasswordMaster != "" && this.locationMaster != ""
      && this.profession != "" && this.experience != "") {
      this.master.name = this.firstNameMaster + " " + this.lastNameMaster;
      this.master.picture = this.pictureMaster;
      this.uploadImage(this.pictureMaster);
      this.master.phoneNumber = this.phoneNumberMaster;
      this.master.location = this.locationMaster;
      this.master.userDescription = this.userDescriptionMaster;
      this.master.isUserBlocked = false;
      this.master.profession = this.profession;
      this.master.tools = this.tools;
      this.master.skills = this.skills;
      this.master.experience = this.experience;
      this.master.start_time = this.startTime;
      this.master.end_time = this.endTime;
      this.master.payment = this.payment;
      this.master.smoke = this.smoke;
      if (this.passwordMaster == this.confirmPasswordMaster) {
        this.master.password = this.passwordMaster;
      } else {
        //error
      }
    } else {
      //error
    }

    this.registrationService.reg(this.master);
    this.authorization();
  }

  uploadImage(nameImage: String){
    this.uploader.autoUpload(nameImage,
      function(error, result) {console.log(result); });
  }

}
