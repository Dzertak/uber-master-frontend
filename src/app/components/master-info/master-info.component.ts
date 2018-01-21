import {Component, NgModule, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import * as  Cloudinary from 'cloudinary-core';
import { FileUploader } from 'ng2-file-upload';
import {User} from "../../models/user.model";
import {Master} from "../../models/master.model";
import {MasterService} from "../../services/master.service";
import {AuthorizeService} from "../../services/authorize.service";

const URL = 'https://api.cloudinary.com/v1_1/ubermaster/image/upload';

declare var $:any;

@Component({
  selector: 'app-master-info',
  templateUrl: './master-info.component.html',
  styleUrls: ['./master-info.component.css']
})
export class MasterInfoComponent implements OnInit {
public uploader:FileUploader = new FileUploader({url: URL});

  master: Master;
  user:User;
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


  constructor(private router: Router,private masterService: MasterService, private authorizeService: AuthorizeService) { }

 
  
  ngOnInit() {
	 
	  this.user = this.authorizeService.getUser();
	  this.masterService.getMaster(this.user.object_id.toString()).subscribe(master => {  
	   this.master = master;
	   this.phoneNumberMaster = this.master.phoneNumber;
	   this.locationMaster = this.master.location;
	   this.userDescriptionMaster = this.master.userDescription;
	   this.passwordMaster = this.user.password;
	   this.confirmPasswordMaster = this.user.password;
	   this.profession = this.master.profession;
	   this.tools = this.master.tools;
	   this.skills = this.master.skills;
	   this.experience = this.master.experience;
	   this.startTime = this.master.start_time;
	   this.endTime = this.master.end_time;
	   this.payment = this.master.payment;
	   this.smoke = this.master.smoke;
	   this.pictureMaster = this.master.picture;
	
       });
	  
	  var str = this.user.name.split(" ",2);
	  this.firstNameMaster = str[0];
	  this.lastNameMaster = str[1];
	 
	  
  }
  
  
  
  confirmChanges(){
	  
    if (this.firstNameMaster != "" && this.lastNameMaster != "" && this.phoneNumberMaster != ""
      && this.passwordMaster != "" && this.confirmPasswordMaster != "" && this.locationMaster != ""
      && this.profession != "" && this.experience != "") {
      this.master.name = this.firstNameMaster + " " + this.lastNameMaster;
      this.master.picture = this.pictureMaster;
      //this.uploadImage(this.pictureMaster);
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
	this.masterService.updateMaster(this.master);  
  }
  
  uploadImage(nameImage: String){
    this.uploader.autoUpload(nameImage,
      function(error, result) {console.log(result); });
  }
  


}
