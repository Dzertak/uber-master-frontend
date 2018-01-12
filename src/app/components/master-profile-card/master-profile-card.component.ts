import { Component,Input, OnInit } from '@angular/core';
import {Order} from "../../index";
//import {AppComponent} from "../../app.component";
import {User, AuthorizeService} from "../../index";

@Component({
  selector: 'app-master-profile-card',
  templateUrl: './master-profile-card.component.html',
  styleUrls: ['./master-profile-card.component.css']
})
export class MasterProfileCardComponent implements OnInit {

 //appcomponent: AppComponent ;
notAdmin = true;
	 @Input() order: Order;

  constructor(private authService: AuthorizeService) { }

  isPoke(): boolean {
		if(this.authService.getUserType() == "ubermaster.entity.model.Poke"){
        return true;}
		else if(this.authService.getUserType() == "ubermaster.entity.model.Master"){
        return false;}
		else if(this.authService.getUserType() == "ubermaster.entity.model.Admin"){
		this.notAdmin = false;
		return true;}
    }
  
  ngOnInit() {
  }

}
