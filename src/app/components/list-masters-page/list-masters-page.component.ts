import { Component,Input, OnInit } from '@angular/core';
import {AuthorizeService} from '../../services/authorize.service';
import {Master} from "../../index";
import {MasterService} from "../../services/master.service";
declare var $:any;

@Component({
  selector: 'app-list-masters-page',
  templateUrl: './list-masters-page.component.html',
  styleUrls: ['./list-masters-page.component.css'],
   // providers: [AuthorizeService]
})
export class ListMastersPageComponent implements OnInit {

    //userName: string;
	isLoad: boolean = true;
	
	masters = [];
	
	loading(status: boolean){
    this.isLoad=status;
  }
    constructor(private authorizeService: AuthorizeService, private masterService:MasterService) { }

    ngOnInit() {
        //this.userName = this.authorizeService.username;
    $('.ui.dropdown').dropdown();
    this.masterService.getMasterList().subscribe(masters => {
      this.loading(false);
      this.masters = masters;
    })

        /*this.authorizeService.getAuthorizeUser().subscribe(masters => {
          this.masters = masters;
        })*/
    }
}
