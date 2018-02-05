import {Component, NgModule, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import * as  Cloudinary from 'cloudinary-core';
import { FileUploader } from 'ng2-file-upload';
import {User} from "../../models/user.model";
import {Poke} from "../../models/poke.model";
import {PokeService} from "../../services/poke.service";
import {AuthorizeService} from "../../services/authorize.service";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

const URL = 'https://api.cloudinary.com/v1_1/ubermaster/image/upload';

declare var $:any;


@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.css']
})
export class PokeInfoComponent implements OnInit {
public uploader:FileUploader = new FileUploader({url: URL});

public rPokeForm: FormGroup;
public locations: { id: number; name: string }[];

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
  
  
  constructor(private fb: FormBuilder, private router: Router,private pokeService: PokeService, private authorizeService: AuthorizeService) { 
	
	
	this.rPokeForm = fb.group({
      'firstNamePoke': [null, Validators.compose([Validators.required, Validators.pattern('^[A-ZА-Я][a-zа-я].*$'), Validators.minLength(2), Validators.maxLength(15)])],
      'lastNamePoke': [null, Validators.compose([Validators.required, Validators.pattern('^[A-ZА-Я][a-zа-я].*$'), Validators.minLength(2), Validators.maxLength(20)])],
      'phoneNumberPoke': [null, Validators.compose([Validators.required, Validators.pattern('^380[0-9]{9}$')])],
      'locationPoke': ['Location...', Validators.required],
      'userDescriptionPoke': [null],
      'passwordPoke': [null,  Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      'confirmPasswordPoke': [null,  Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])]
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

	  
	  $('.message .close').on('click', function () {
          $(this)
              .closest('.message')
              .transition('fade');
      });
	  
	  this.user = this.authorizeService.getUser();
	  this.pokeService.getPoke(this.user.object_id.toString()).subscribe(poke => {

	  this.poke = poke;
	  var str = this.user.name.split(" ",2);
	  this.firstNamePoke = str[0];
	  this.lastNamePoke = str[1];
	  
	  //this.picturePoke = this.poke.picture;
	  
	  this.rPokeForm = this.fb.group({
      'firstNamePoke': [this.firstNamePoke, Validators.compose([Validators.required, Validators.pattern('^[A-ZА-Я][a-zа-я].*$'), Validators.minLength(2), Validators.maxLength(15)])],
      'lastNamePoke': [this.lastNamePoke, Validators.compose([Validators.required, Validators.pattern('^[A-ZА-Я][a-zа-я].*$'), Validators.minLength(2), Validators.maxLength(20)])],
      'phoneNumberPoke': [this.poke.phoneNumber, Validators.compose([Validators.required, Validators.pattern('^380[0-9]{9}$')])],
      'locationPoke': [this.poke.location, Validators.required],
      'userDescriptionPoke': [this.poke.description],
      'passwordPoke': [this.poke.password, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      'confirmPasswordPoke': [this.poke.password, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])]
    })
	  
       });
	 
	  
  }
  
  showSuccessUpdate() {
      $('#update-success-message').removeClass('hidden');
  }
  
  confirmChanges(){
	  
   
      this.poke.name = this.rPokeForm.value.firstNamePoke + " " + this.rPokeForm.value.lastNamePoke;
      this.poke.picture = this.picturePoke;
      //this.uploadImage(this.picturePoke);
      this.poke.phoneNumber = this.rPokeForm.value.phoneNumberPoke;
      this.poke.location = this.rPokeForm.value.locationPoke;
      this.poke.userDescription = this.rPokeForm.value.userDescriptionPoke;
      this.poke.blocked = false;
      this.passwordPoke == this.rPokeForm.value.confirmPasswordPoke
      this.poke.password = this.rPokeForm.value.passwordPoke;
     
	this.pokeService.updatePoke(this.poke); 
	this.showSuccessUpdate();
	
  }
  
  uploadImage(nameImage: String){
    this.uploader.autoUpload(nameImage,
      function(error, result) {console.log(result); });
  }

}
