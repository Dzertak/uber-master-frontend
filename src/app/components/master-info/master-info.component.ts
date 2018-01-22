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
  averMark: number;


  constructor(private router: Router,private masterService: MasterService, private authorizeService: AuthorizeService) { }

 
  
  ngOnInit() {
	 
	  this.user = this.authorizeService.getUser();
	  this.masterService.getMaster(this.user.getObject_id.toString()).subscribe(master => {
	   this.master = master;
	   this.phoneNumberMaster = this.master.getPhoneNumber;
	   this.locationMaster = this.master.getLocation;
	   this.userDescriptionMaster = this.master.getUserDescription;
	   this.passwordMaster = this.user.getPassword;
	   this.confirmPasswordMaster = this.user.getPassword;
	   this.profession = this.master.getProfession;
	   this.tools = this.master.getTools;
	   this.skills = this.master.getSkills;
	   this.experience = this.master.getExperience;
	   this.startTime = this.master.getStart_time;
	   this.endTime = this.master.getEnd_time;
	   this.payment = this.master.getPayment;
	   this.smoke = this.master.getSmoke;
	   this.pictureMaster = this.master.getPicture;
	   this.averMark = this.master.getAverMark;
       });
	  
	  var str = this.user.getName.split(" ",2);
	  this.firstNameMaster = str[0];
	  this.lastNameMaster = str[1];
	 
	  
  }

  confirmChanges(){
	  
    if (this.firstNameMaster != "" && this.lastNameMaster != "" && this.phoneNumberMaster != ""
      && this.passwordMaster != "" && this.confirmPasswordMaster != "" && this.locationMaster != ""
      && this.profession != "" && this.experience != "") {
      this.master.setName = this.firstNameMaster + " " + this.lastNameMaster;
      this.master.setPicture = this.pictureMaster;
      //this.uploadImage(this.pictureMaster);
      this.master.setPhoneNumber = this.phoneNumberMaster;
      this.master.setLocation = this.locationMaster;
      this.master.setUserDescription = this.userDescriptionMaster;
      this.master.setIsBlocked = false;
      this.master.setProfession = this.profession;
      this.master.setTools = this.tools;
      this.master.setSkills = this.skills;
      this.master.setExperience = this.experience;
      this.master.setStart_time = this.startTime;
      this.master.setEnd_time = this.endTime;
      this.master.setPayment = this.payment;
      this.master.setSmoke = this.smoke;
      if (this.passwordMaster == this.confirmPasswordMaster) {
        this.master.setPassword = this.passwordMaster;
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
