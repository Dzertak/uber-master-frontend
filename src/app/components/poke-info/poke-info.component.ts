import {Component, NgModule, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../models/user.model";
import {Poke} from "../../models/poke.model";
import {PokeService} from "../../services/poke.service";
import {AuthorizeService} from "../../services/authorize.service";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FileUploader, FileUploaderOptions, ParsedResponseHeaders} from 'ng2-file-upload';
import {Cloudinary} from '@cloudinary/angular-4.x';

const URL = 'https://api.cloudinary.com/v1_1/ubermaster/image/upload';

declare var $:any;


@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.css']
})
export class PokeInfoComponent implements OnInit {


  public rPokeForm: FormGroup;
  public locations: { id: number; name: string }[];

  user: User;
  poke: Poke;
  firstNamePoke: string;
  lastNamePoke: string;
  phoneNumberPoke: string;
  locationPoke: string;
  userDescriptionPoke: string;
  passwordPoke: string;
  confirmPasswordPoke: string;
  picture: string;

  isCreating: boolean = false;
  isLoad: boolean = true;

  public uploader: FileUploader;
  public hasBaseDropZoneOver = false;
  file: any = null;

  constructor(private fb: FormBuilder, private router: Router,private pokeService: PokeService,
              private authorizeService: AuthorizeService, private cloudinary: Cloudinary) {

    this.user = this.authorizeService.getUser();
    this.pokeService.getPoke(this.user.object_id.toString()).subscribe(poke => {
      this.isLoad = false;
      this.poke = poke;
      var str = this.poke.name.split(" ",2);
      this.firstNamePoke = str[0];
      this.lastNamePoke = str[1];

      this.picture = poke.picture;


      this.rPokeForm = this.fb.group({
        'firstNamePoke': [this.firstNamePoke, Validators.compose([Validators.required, Validators.pattern('^[A-ZА-Я][a-zа-я]+'), Validators.minLength(2), Validators.maxLength(15)])],
        'lastNamePoke': [this.lastNamePoke, Validators.compose([Validators.required, Validators.pattern('^[A-ZА-Я][a-zа-я]+$'), Validators.minLength(2), Validators.maxLength(20)])],
        'phoneNumberPoke': [poke.phoneNumber, Validators.compose([Validators.required, Validators.pattern('^380[0-9]{9}$')])],
        'locationPoke': [poke.location, Validators.required],
        'userDescriptionPoke': [poke.description],
        'passwordPoke': [atob(poke.password), Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])],
        'confirmPasswordPoke': [atob(poke.password), Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])]
      })

    });

  }


  ngOnInit() {


    this.locations = [
      {id: 0, name: 'Location...'},
      {id: 1, name: 'Primorskyy'},
      {id: 2, name: 'Malinovskyy'},
      {id: 3, name: 'Kievskyy'},
      {id: 4, name: 'Suvorovskyy'},
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


    $('.message .close').on('click', function () {
      $(this)
        .closest('.message')
        .transition('fade');
    });




  }

  showSuccessUpdate() {
    $('#update-success-message').removeClass('hidden');
  }

  confirmChanges(){

    if (this.file != null) {
      this.poke.picture = this.file.public_id;
    }

    this.poke.name = this.rPokeForm.value.firstNamePoke + ' ' + this.rPokeForm.value.lastNamePoke;
    this.poke.phoneNumber = this.rPokeForm.value.phoneNumberPoke;
    this.poke.location = this.rPokeForm.value.locationPoke;
    this.poke.userDescription = this.rPokeForm.value.userDescriptionPoke;
    this.poke.blocked = false;
    // this.passwordPoke == this.rPokeForm.value.confirmPasswordPoke
    this.poke.password = btoa(this.rPokeForm.value.passwordPoke);
    this.isCreating = true;
    this.pokeService.updatePoke(this.poke).subscribe(response => {
      this.isCreating = false;
      this.showSuccessUpdate();

    }, error => {
      this.isCreating = false;
      this.showSuccessUpdate();

    });
  }

  uploadImage(nameImage: String){
    this.uploader.autoUpload(nameImage,
      function(error, result) {console.log(result); });
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

}
