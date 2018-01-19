import { ChangeDetectionStrategy, Component,Input, OnInit } from '@angular/core';
import {Master} from "../../models/master.model";
//import {Order} from "../../index"; 
import {Order} from "../../models/order.model";//new
import {OrderService} from "../../services/order.service"; 
import {PaginationInstance} from "ngx-pagination";
import {ActivatedRoute} from "@angular/router";

import {MasterService} from "../../services/master.service";
import {AuthorizeService} from "../../services/authorize.service";
//import {User} from "../../models/user.model";
declare var $:any;


@Component({
  selector: 'app-profile-master',
  templateUrl: './profile-master.component.html',
  styleUrls: ['./profile-master.component.css']
})
export class ProfileMasterComponent implements OnInit {
	
	master: Master;
	idM: string;
	//user: User;
	orders = [];
	
	swipe: number = 0;
   searchStr = '';
   searchStr2 = '';
  tag: string = '';
  tag2: string = '';
  isLoad: boolean = true;
  
	  
	  public filter: string = '';
    public maxSize: number = 7;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public config: PaginationInstance = {
        id: 'master-in-process',
        itemsPerPage: 3,
        currentPage: 1
    };
	public config2: PaginationInstance = {
        id: 'master-completed',
        itemsPerPage: 3,
        currentPage: 1
    };

    public labels: any = {
        previousLabel: 'Previous',
        nextLabel: 'Next',
        screenReaderPaginationLabel: 'Pagination',
        screenReaderPageLabel: 'page',
        screenReaderCurrentLabel: `You're on page`
    };
  
  loading(status: boolean){
    this.isLoad=status;
  }
  
  
  constructor(private router: ActivatedRoute, private masterService: MasterService, private authorizeService: AuthorizeService) { }

  ngOnInit() {
	 
	//$('.ui.dropdown').dropdown();
	this.idM = this.router.snapshot.params.id;
	//this.user = this.authorizeService.getUser();
	//this.idM = this.user.object_id.toString();
	this.masterService.getMasterOrders(this.idM).subscribe(orders => {  
	   this.orders = orders;
		//this.loading(false);
        
       });
    this.masterService.getMaster(this.idM).subscribe(master => {  
	   this.master = master;
		this.loading(false);
        
       });
	   
	   this.tag = "In processing";
	   this.tag2 = "Completed";
	 
  }
  
   isSmoking() {
	  return this.master.smoke;
  } 
  
  getSelectedTextValue() {
       this.tag = "In processing";
  }
 
  
  onPageChange(number: number) {
        console.log('change to page', number);
        this.config.currentPage = number;
	
    }
	
	onPageChange2(number: number) {
        console.log('change to page', number);
		this.config2.currentPage = number;
    }
	
	swipeTab(tab: number){
        this.swipe = tab;
    }
	
	  

}
