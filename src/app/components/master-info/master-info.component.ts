import {Component, NgModule, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FileUploader, FileUploaderOptions, ParsedResponseHeaders} from 'ng2-file-upload';
import {User} from '../../models/user.model';
import {Master} from '../../models/master.model';
import {MasterService} from '../../services/master.service';
import {AuthorizeService} from '../../services/authorize.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Cloudinary} from '@cloudinary/angular-4.x';

const URL = 'https://api.cloudinary.com/v1_1/ubermaster/image/upload';

declare var $: any;

@Component({
  selector: 'app-master-info',
  templateUrl: './master-info.component.html',
  styleUrls: ['./master-info.component.css']
})
export class MasterInfoComponent implements OnInit {
  public rMasterForm: FormGroup;
  public locations: { id: number; name: string }[];
  public professions: { id: number; name: string }[];

  master: Master;
  user: User;
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

  isLoad: boolean = true;
  isCreating: boolean = false;

  file: any;
  public uploader: FileUploader;
  public hasBaseDropZoneOver = false;

  constructor(private fb: FormBuilder, private router: Router,
              private masterService: MasterService, private authorizeService: AuthorizeService,
              private cloudinary: Cloudinary) {

    this.user = this.authorizeService.getUser();
    this.masterService.getMaster(this.user.object_id.toString()).subscribe(master => {
      this.isLoad = false;
      this.master = master;
      var str = this.user.name.split(' ', 2);
      this.firstNameMaster = str[0];
      this.lastNameMaster = str[1];

      //this.pictureMaster = this.master.picture;
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
        'passwordMaster': [atob(this.master.password), Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])],
        'confirmPasswordMaster': [atob(this.master.password), Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])],
        'profession': [this.master.profession, Validators.required],
        'startTime': [this.master.start_time, Validators.required],
        'endTime': [this.master.end_time, Validators.required],
        'tools': [this.master.tools],
        'experience': [this.master.experience, Validators.compose([Validators.required, Validators.min(0)])],
        'skills': [this.master.skills],
        'smoke': [this.master.smoke, Validators.required],
        'payment': [this.master.payment, Validators.compose([Validators.required, Validators.min(0)])]

      });


    });

    //  this.rMasterForm = fb.group({
    //   'firstNameMaster': [null, Validators.compose([Validators.required, Validators.pattern('^[A-Z][a-z].*$'), Validators.minLength(2), Validators.maxLength(15)])],
    //   'lastNameMaster': [null, Validators.compose([Validators.required, Validators.pattern('^[A-Z][a-z].*$'), Validators.minLength(2), Validators.maxLength(20)])],
    //   'phoneNumberMaster': [null, Validators.compose([Validators.required, Validators.pattern('^380[0-9]{9}$')])],
    //   'locationMaster': ['Location...', Validators.required],
    //   'userDescriptionMaster': [null],
    //   'passwordMaster': [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])],
    //   'confirmPasswordMaster': [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])],
    //   'profession': ['Profession...', Validators.required],
    //   'startTime': [null, Validators.required],
    //   'endTime': [null, Validators.required],
    //   'tools': [null],
    //   'experience': [null, Validators.required, Validators.compose([Validators.required, Validators.min(0)])],
    //   'skills': [null],
    //   'smoke': [null, Validators.required],
    //   'payment': [null, Validators.required, Validators.compose([Validators.required, Validators.min(0)])]
    //
    // })

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
      this.isCreating = true;

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
      this.isCreating = false;
      if (fileItem.status !== 200) {
        console.log('Upload to cloudinary Failed');
        console.log(fileItem);
        return false;
      }
      this.file = fileItem.data;
      console.log(fileItem.data);
    };

  }

  showSuccessUpdate() {
    $('#update-success-message').removeClass('hidden');
  }

  confirmChanges() {
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

    if (this.file != null) {
      this.master.picture = this.file.public_id;
    }

    this.master.name = this.rMasterForm.value.firstNameMaster + ' ' + this.rMasterForm.value.lastNameMaster;
    //this.uploadImage(this.pictureMaster);
    //this.master.picture = this.pictureMaster;
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
    // this.passwordMaster == this.rMasterForm.value.confirmPasswordMaster;
    this.master.password = btoa(this.rMasterForm.value.passwordMaster);

    this.isCreating = true;
    this.masterService.updateMaster(this.master).subscribe(response => {
      this.isCreating = false;
      this.showSuccessUpdate();
      this.router.navigate(['/profileMaster', this.master.object_id]);
    }, error => {
      this.isCreating = false;
      this.showSuccessUpdate();
      this.router.navigate(['/profileMaster', this.master.object_id]);
    });
  }

  uploadImage(nameImage: String) {
    this.uploader.autoUpload(nameImage,
      function (error, result) {
        console.log(result);
      });
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }


}
