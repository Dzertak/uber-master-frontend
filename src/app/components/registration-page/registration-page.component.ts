import {Component, NgModule, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FileUploader, FileUploaderOptions, ParsedResponseHeaders} from 'ng2-file-upload';
import {RegistrationService} from '../../services/registration.service';
import {User} from '../../models/user.model';
import {Poke} from '../../models/poke.model';
import {Master} from '../../models/master.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrderService} from '../../services/order.service';
import {Order} from '../../models/order.model';
import {AuthorizeService} from '../../services/authorize.service';
import {Cloudinary} from '@cloudinary/angular-4.x';
import {_MatButtonToggleGroupMixinBase} from "@angular/material";

const URL = 'https://api.cloudinary.com/v1_1/ubermaster/image/upload';

declare var $: any;

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
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

  public uploader: FileUploader;
  public hasBaseDropZoneOver = false;
  file: any = null;
  isLoadingPicture: boolean = false;


  constructor(private fb: FormBuilder, private router: Router, private registrationService: RegistrationService,
              private authService: AuthorizeService, private cloudinary: Cloudinary) {

    this.rPokeForm = fb.group({
      'firstNamePoke': [null, Validators.compose([Validators.required, Validators.pattern('^[A-ZА-Я][a-zа-я].*$'), Validators.minLength(2), Validators.maxLength(15)])],
      'lastNamePoke': [null, Validators.compose([Validators.required, Validators.pattern('^[A-ZА-Я][a-zа-я].*$'), Validators.minLength(2), Validators.maxLength(20)])],
      'phoneNumberPoke': [null, Validators.compose([Validators.required, Validators.pattern('^380[0-9]{9}$')])],
      'locationPoke': ['Location...', Validators.required],
      'userDescriptionPoke': [null],
      'passwordPoke': [null, Validators.required],
      'confirmPasswordPoke': [null, Validators.required]
    })

    this.rMasterForm = fb.group({
      'firstNameMaster': [null, Validators.compose([Validators.required, Validators.pattern('^[A-ZА-Я][a-zа-я].*$'), Validators.minLength(2), Validators.maxLength(15)])],
      'lastNameMaster': [null, Validators.compose([Validators.required, Validators.pattern('^[A-ZА-Я][a-zа-я].*$'), Validators.minLength(2), Validators.maxLength(20)])],
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


    const uploaderOptions: FileUploaderOptions = {
      url: `https://api.cloudinary.com/v1_1/${this.cloudinary.config().cloud_name}/image/upload`,
      // Upload files automatically upon addition to upload queue
      autoUpload: true,
      // Use xhrTransport in favor of iframeTransport
      isHTML5: true,
      // Calculate progress independently for each uploaded file
      removeAfterUpload: true,

      // XHR request headers
      headers: [
        {
          name: 'X-Requested-With',
          value: 'XMLHttpRequest'
        }
      ]
    };

    this.uploader = new FileUploader(uploaderOptions);
    this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {

      // Add Cloudinary's unsigned upload preset to the upload form
      form.append('upload_preset', this.cloudinary.config().upload_preset);
      form.append('tags', 'ubermaster');
      form.append('file', fileItem);

      // Use default "withCredentials" value for CORS requests
      fileItem.withCredentials = false;
      return { fileItem, form };
    };


    this.uploader.onCompleteItem = (item: any, response: string, status: number, headers: ParsedResponseHeaders) =>
      upsertResponse(
        {
          file: item.file,
          status,
          data: JSON.parse(response)
        }

      );

    const upsertResponse = fileItem => {
      if (fileItem.status !== 200) {
        console.log('Upload to cloudinary Failed');
        console.log(fileItem);
        return false;
      }
      this.file = fileItem.data;
      console.log(fileItem.data);
    };


    if (this.authService.getUserLoggedIn()) {
      this.router.navigate(['orders']);
    }
	
	 $('.message .close').on('click', function () {
          $(this)
              .closest('.message')
              .transition('fade');
      });

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
  
  showFailedAuthorization1() {
      $('#authorization1-fail-message').removeClass('hidden');
  }
  showFailedAuthorization2() {
      $('#authorization2-fail-message').removeClass('hidden');
  }
  showGood() {
      $('#good-message').removeClass('hidden');
  }
  
  errMsg: string;
	
  signUpPoke(create) {
    let poke = new Poke(create.firstNamePoke + ' ' + create.lastNamePoke,
      null, null, create.locationPoke, create.userDescriptionPoke,
      create.phoneNumberPoke, create.passwordPoke, this.file.public_id, false);
    this.registrationService.reg(poke, 'Poke').subscribe( user => {
		//this.showGood();
		this.router.navigate(['authorization']);		
	} , responseErrorMessage => {this.errMsg = responseErrorMessage, this.showFailedAuthorization1();});

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
      create.phoneNumberMaster, create.passwordMaster, this.file.public_id, false,
      create.profession, create.skills, create.experience, create.payment, create.smoke,
      create.tools, create.startTime, create.endTime, create.averMark);
	  
    this.registrationService.reg(master, 'Master').subscribe( response => {
	this.router.navigate(['authorization']);},
            responseErrorMessage => {
      this.errMsg = responseErrorMessage, this.showFailedAuthorization2();
    });
            
	  
  }


  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

}
