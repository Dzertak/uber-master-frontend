import {Component, NgModule, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import * as  Cloudinary from 'cloudinary-core';
import { FileUploader } from 'ng2-file-upload';
import {User} from "../../models/user.model";
import {Master} from "../../models/master.model";
import {MasterService} from "../../services/master.service";
import {AuthorizeService} from "../../services/authorize.service";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

const URL = 'https://api.cloudinary.com/v1_1/ubermaster/image/upload';

declare var $:any;

@Component({
  selector: 'app-master-info',
  templateUrl: './master-info.component.html',
  styleUrls: ['./master-info.component.css']
})
export class MasterInfoComponent implements OnInit {
public uploader:FileUploader = new FileUploader({url: URL});


public rMasterForm: FormGroup;
public locations: { id: number; name: string }[];
public professions: { id: number; name: string }[];

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


  constructor(private fb: FormBuilder, private router: Router,private masterService: MasterService, private authorizeService: AuthorizeService) {
	  
	  this.rMasterForm = fb.group({
      'firstNameMaster': [null, Validators.compose([Validators.required, Validators.pattern('^[A-Z][a-z].*$'), Validators.minLength(2), Validators.maxLength(15)])],
      'lastNameMaster': [null, Validators.compose([Validators.required, Validators.pattern('^[A-Z][a-z].*$'), Validators.minLength(2), Validators.maxLength(20)])],
      'phoneNumberMaster': [null, Validators.compose([Validators.required, Validators.pattern('^380[0-9]{9}$')])],
      'locationMaster': ['Location...', Validators.required],
      'userDescriptionMaster': [null],
      'passwordMaster': [null, Validators.required],
      'confirmPasswordMaster': [null, Validators.required],
      'profession': ['Profession...', Validators.required],
      'startTime': [null, Validators.required],
      'endTime': [null, Validators.required],
      'tools': [null],
      'experience': [null, Validators.required],
      'skills': [null],
      'smoke': [null, Validators.required],
      'payment': [null, Validators.required]

    }) 
	
	}

 
  
  ngOnInit() {
	  
	  this.locations = [
      {id: 0, name: 'Location...'},
      {id: 1, name: 'Primorskyy'},
      {id: 2, name: 'Malinovskyy'},
      {id: 3, name: 'Kievskyy'},
      {id: 4, name: 'Suvorovskyy'},
    ];

    this.professions = [
        {id: 0, name: 'Profession...'},
        {id: 1, name: 'Locksmith'},
        {id: 2, name: 'Plumber'},
        {id: 3, name: 'Electrician'},
        {id: 4, name: 'Cleaner'},
        {id: 5, name: 'Computer foreman'},
        {id: 6, name: 'Handyman'}
    ];
	  
	  
	  this.user = this.authorizeService.getUser();
	  this.masterService.getMaster(this.user.object_id.toString()).subscribe(master => {
	   
	   this.master = master;
	   var str = this.user.name.split(" ",2);
	   this.firstNameMaster = str[0];
	   this.lastNameMaster = str[1];
	   
	   /* this.phoneNumberMaster = this.master.phoneNumber;
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
	   this.averMark = this.master.averMark; */
	   
	   /* this.rMasterForm.value.phoneNumberMaster = this.master.phoneNumber;
	   this.rMasterForm.value.locationMaster = this.master.location;
	   this.rMasterForm.value.firstNameMaster = this.firstNameMaster;
	   this.rMasterForm.value.lastNameMaster = this.lastNameMaster; */ 
	   
	   this.rMasterForm = this.fb.group({
      'firstNameMaster': [this.firstNameMaster, Validators.compose([Validators.required, Validators.pattern('^[A-Z][a-z].*$'), Validators.minLength(2), Validators.maxLength(15)])],
      'lastNameMaster': [this.lastNameMaster, Validators.compose([Validators.required, Validators.pattern('^[A-Z][a-z].*$'), Validators.minLength(2), Validators.maxLength(20)])],
      'phoneNumberMaster': [this.master.phoneNumber, Validators.compose([Validators.required, Validators.pattern('^380[0-9]{9}$')])],
      'locationMaster': [this.master.location, Validators.required],
      'userDescriptionMaster': [this.master.userDescription],
      'passwordMaster': [this.master.password, Validators.required],
      'confirmPasswordMaster': [this.master.password, Validators.required],
      'profession': [this.master.profession, Validators.required],
      'startTime': [this.master.start_time, Validators.required],
      'endTime': [this.master.end_time, Validators.required],
      'tools': [this.master.tools],
      'experience': [this.master.experience, Validators.required],
      'skills': [this.master.skills],
      'smoke': [this.master.smoke, Validators.required],
      'payment': [this.master.payment, Validators.required]

    });
	   
	   
       });
	  
	  
	 
	  
  }

   showSuccessUpdate() {
      $('#update-success-message').removeClass('hidden');
  }
  
  confirmChanges(){
	  
	/*   
    if (this.firstNameMaster != "" && this.lastNameMaster != "" && this.phoneNumberMaster != ""
      && this.passwordMaster != "" && this.confirmPasswordMaster != "" && this.locationMaster != ""
      && this.profession != "" && this.experience != "") {
      this.master.name = this.firstNameMaster + " " + this.lastNameMaster;
      this.master.picture = this.pictureMaster;
      //this.uploadImage(this.pictureMaster);
      this.master.phoneNumber = this.phoneNumberMaster;
      this.master.location = this.locationMaster;
      this.master.userDescription = this.userDescriptionMaster;
      this.master.blocked = false;
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
    } */
      this.master.name = this.rMasterForm.value.firstNameMaster + " " + this.rMasterForm.value.lastNameMaster;
      //this.uploadImage(this.pictureMaster);
	  this.master.picture = this.pictureMaster;
      this.master.phoneNumber = this.rMasterForm.value.phoneNumberMaster;
      this.master.location = this.rMasterForm.value.locationMaster;
      this.master.userDescription = this.rMasterForm.value.userDescriptionMaster;
      this.master.blocked = false;
      this.master.profession = this.rMasterForm.value.profession;
      this.master.tools = this.rMasterForm.value.tools;
      this.master.skills = this.rMasterForm.value.skills;
      this.master.experience = this.rMasterForm.value.experience;
      this.master.start_time = this.rMasterForm.value.startTime;
      this.master.end_time = this.rMasterForm.value.endTime;
      this.master.payment = this.rMasterForm.value.payment;
      this.master.smoke = this.rMasterForm.value.smoke;
      this.passwordMaster == this.rMasterForm.value.confirmPasswordMaster;
      this.master.password = this.rMasterForm.value.passwordMaster;
	this.masterService.updateMaster(this.master); 
	this.showSuccessUpdate();
  }
  
  uploadImage(nameImage: String){
    this.uploader.autoUpload(nameImage,
      function(error, result) {console.log(result); });
  }
  


}
