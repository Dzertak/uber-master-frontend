import {Component, NgModule, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import * as  Cloudinary from 'cloudinary-core';
import { FileUploader } from 'ng2-file-upload';
import {User} from "../../models/user.model";
import {Poke} from "../../models/poke.model";
import {PokeService} from "../../services/poke.service";
import {AuthorizeService} from "../../services/authorize.service";

const URL = 'https://api.cloudinary.com/v1_1/ubermaster/image/upload';

declare var $:any;


@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.css']
})
export class PokeInfoComponent implements OnInit {
public uploader:FileUploader = new FileUploader({url: URL});

  user: User;
  poke: Poke;
  picturePoke: string;
  firstNamePoke: string;
  lastNamePoke: string;
  phoneNumberPoke: string;
  locationPoke: string;
  userDescriptionPoke: string;
  passwordPoke: string;
  confirmPasswordPoke: string;
  
  
  constructor(private router: Router,private pokeService: PokeService, private authorizeService: AuthorizeService) { }

  
  ngOnInit() {
	  
	  this.user = this.authorizeService.getUser();
	  this.pokeService.getPoke(this.user.getObject_id.toString()).subscribe(poke => {
	   this.poke = poke;
	   this.phoneNumberPoke = this.poke.getPhoneNumber;
	   this.locationPoke = this.poke.getLocation;
	   this.userDescriptionPoke = this.poke.getUserDescription;
	   this.passwordPoke = this.user.getPassword;
	   this.confirmPasswordPoke = this.user.getPassword;
	   this.picturePoke = this.poke.getPicture;
       });
	  var str = this.user.getName.split(" ",2);
	  this.firstNamePoke = str[0];
	  this.lastNamePoke = str[1];
	  
  }
  
  confirmChanges(){
	  
    if (this.firstNamePoke != "" && this.lastNamePoke != "" && this.phoneNumberPoke != ""
      && this.passwordPoke != "" && this.confirmPasswordPoke != "" && this.locationPoke != "") {
      this.poke.setName = this.firstNamePoke + " " + this.lastNamePoke;
      this.poke.setPicture = this.picturePoke;
      //this.uploadImage(this.picturePoke);
      this.poke.setPhoneNumber = this.phoneNumberPoke;
      this.poke.setLocation = this.locationPoke;
      this.poke.setUserDescription = this.userDescriptionPoke;
      this.poke.setIsBlocked = false;
      if (this.passwordPoke == this.confirmPasswordPoke) {
        this.poke.setPassword = this.passwordPoke;
      } else {
        //error
      }
    } else {
      //error
    }
	this.pokeService.updatePoke(this.poke);  
  }
  
  uploadImage(nameImage: String){
    this.uploader.autoUpload(nameImage,
      function(error, result) {console.log(result); });
  }

}
