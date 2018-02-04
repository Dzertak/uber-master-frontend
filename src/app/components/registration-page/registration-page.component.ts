import {Component, NgModule, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as  Cloudinary from 'cloudinary-core';
import {FileUploader} from 'ng2-file-upload';
import {RegistrationService} from '../../services/registration.service';
import {User} from '../../models/user.model';
import {Poke} from '../../models/poke.model';
import {Master} from '../../models/master.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrderService} from '../../services/order.service';
import {Order} from '../../models/order.model';
import {AuthorizeService} from '../../services/authorize.service';
import {isBoolean} from 'util';

const URL = 'https://api.cloudinary.com/v1_1/ubermaster/image/upload';

declare var $: any;

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({url: URL});
  swipe: number = 0;
  picturePoke: string;

  pictureMaster: string;

  variable: { phoneNumber, pass }

  private order: Order;
  public rPokeForm: FormGroup;
  public rMasterForm: FormGroup;
  private create: any;
  public locations: { id: number; name: string }[];
  public professions: { id: number; name: string }[];

  averMark: number;
  smoke: boolean;


  constructor(private fb: FormBuilder, private router: Router, private registrationService: RegistrationService,
              private authService: AuthorizeService) {

    this.rPokeForm = fb.group({
      'firstNamePoke': [null, Validators.compose([Validators.required, Validators.pattern('^[A-Z][a-z].*$'), Validators.minLength(2), Validators.maxLength(15)])],
      'lastNamePoke': [null, Validators.compose([Validators.required, Validators.pattern('^[A-Z][a-z].*$'), Validators.minLength(2), Validators.maxLength(20)])],
      'phoneNumberPoke': [null, Validators.compose([Validators.required, Validators.pattern('^380[0-9]{9}$')])],
      'locationPoke': ['Location...', Validators.required],
      'userDescriptionPoke': [null],
      'passwordPoke': [null, Validators.required],
      'confirmPasswordPoke': [null, Validators.required]
    })

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
    if (this.authService.getUserLoggedIn()) {
      this.router.navigate(['orders']);
    }

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
      {id: 2, name: 'Electrician'},
      {id: 3, name: 'Cleaner'},
      {id: 4, name: 'Computer foreman'},
      {id: 4, name: 'Handyman'}
    ];
  }

  authorization() {
    this.router.navigate(['authorization']);
  }

  swipeTab(tab: number) {
    this.swipe = tab;
  }

  signUpPoke(create) {
    let poke = new Poke(create.firstNamePoke + ' ' + create.lastNamePoke,
      null, null, create.locationPoke, create.userDescriptionPoke,
      create.phoneNumberPoke, create.passwordPoke, ' ', false);
    this.registrationService.reg(poke, 'Poke');

    /*.subscribe(response => {
      if (response.status==200){
        this.router.navigate(['authorization']);
      }
    });*/
  }

  signUpMaster(create) {
    if (create.smoke == 'true') {
      this.smoke = true;
    } else {
      this.smoke = false;
    }

    let master = new Master(create.firstNameMaster + ' ' + create.lastNameMaster,
      null, null, create.locationMaster, create.userDescriptionMaster,
      create.phoneNumberMaster, create.passwordMaster, create.pictureMaster, false,
      create.profession, create.skills, create.experience, create.payment, create.smoke,
      create.tools, create.startTime, create.endTime, create.averMark);
    this.registrationService.reg(master, 'Master');
  }

  uploadImage(nameImage: String) {
    this.uploader.autoUpload(nameImage,
      function (error, result) {
        console.log(result);
      });
  }

}
