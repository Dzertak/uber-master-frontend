import { ChangeDetectionStrategy, Component,Input, OnInit } from '@angular/core';
import {Master} from "../../index";
declare var $:any;

@Component({
  selector: 'app-profile-master',
  templateUrl: './profile-master.component.html',
  styleUrls: ['./profile-master.component.css']
})
export class ProfileMasterComponent implements OnInit {

  //@Input() master: Master;
  
  isLoad: boolean = true;
  master = {"name":"Dirty Harry","description":"DESCR : 30","object_id":30,"location":"Primorskyy","userDescription":"USERDESCR","phoneNumber":"380754832658","password":"pass1","picture":"pic1","classType":"Master","isUserBlocked":false,"profession":"Cleaner","skills":"Cool Guy","experience":"4 years","payment":250,"smoke":false,"tools":"axe","start_time":-61599024840000,"end_time":-61597815240000};
  
  loading(status: boolean){
    this.isLoad=status;
  }
  
  
  constructor() { }

  ngOnInit() {
	   $('.ui.dropdown').dropdown();
      this.loading(false);
  }
  
  isSmoking() {
	  return this.master.smoke;
  }

}
