import { Component,Input, OnInit } from '@angular/core';
import {Order} from "../../index";
//import {AppComponent} from "../../app.component";
import {User, AuthorizeService,OrderService} from "../../index";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-master-profile-card',
  templateUrl: './master-profile-card.component.html',
  styleUrls: ['./master-profile-card.component.css']
})
export class MasterProfileCardComponent implements OnInit {

 //appcomponent: AppComponent ;
 //id: string;
notAdmin = true;
	 @Input() order: Order;
	user: User
  constructor(private router: ActivatedRoute,private authService: AuthorizeService, private orderService: OrderService) { }

  isPoke(): boolean {
		if(this.authService.getUserType() == "Poke"){
        return true;}
		else if(this.authService.getUserType() == "Master"){
        return false;}
		else if(this.authService.getUserType() == "Admin"){
		this.notAdmin = false;
		return true;}
    }
  
  ngOnInit() {
	  this.user = this.authService.getUser();
  }
  
  deleteOrder(id: string){
	  this.orderService.deleteOrder(id);
  }
  
  confirmOrder(order: Order){
	  this.orderService.updateOrderByPoke(order, this.user);
	  
  }
  
  confirmCompletionByMaster(order: Order){
	  this.orderService.completeOrderByMaster(order);
	  
  }

}
