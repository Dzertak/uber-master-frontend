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
import {SuiRatingModule} from 'ng2-semantic-ui';

declare var $:any;


@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
	
	master: Master;
	idM: string;
	//user: User;
	orders = [];
	ordersWithComments = [];
	avg:number;
	sum:number;
	swipe: number = 1;
   searchStr: string = '';
   searchStr2: string = '';
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
	this.masterService.getMasterOrders(this.idM).subscribe(ords => {
	   this.orders = ords;
        /*for(var i = 1; i <= ords.length; i++){
            if (ords.pop(i).comment!=''){
                console.log(ords.pop(i))
                this.ordersWithComments.push(ords.pop(i));
            }
        }*/
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
	
	mastersRate(){
		this.sum = 0;
		this.avg = 0;
		var count: number = 0;
		for(let ord of this.orders)
		{
			if(ord.mark != 0)
			{
			this.sum += ord.mark;
			count++;
			}
		}
		this.avg = this.sum/count /* this.orders.length */;
		return Math.round(this.avg);
	}
	
	  

}
