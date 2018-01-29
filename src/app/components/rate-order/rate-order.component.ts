import { Component, OnInit } from '@angular/core';
import {Order} from "../../index";
import {User, AuthorizeService,OrderService} from "../../index";
import {ActivatedRoute, Router} from "@angular/router";
import {SuiRatingModule} from 'ng2-semantic-ui';

@Component({
  selector: 'app-rate-order',
  templateUrl: './rate-order.component.html',
  styleUrls: ['./rate-order.component.css']
})
export class RateOrderComponent implements OnInit {

  commentByPoke: string;
  markByPoke: number;
  order: Order;
  id:string;
  user:User;
  rating: number; 
  //disabling: boolean;

  constructor(private router2: Router, private router: ActivatedRoute,private authService: AuthorizeService, private orderService: OrderService) { }

  ngOnInit() {
	  this.id = this.router.snapshot.params.id;
	  this.user = this.authService.getUser();
      this.orderService.getOrder(this.id).subscribe(order => {
        this.order = order;
      })
  }
 

  confirmOrder(){
	    this.order.mark = this.rating;
		this.order.comment = this.commentByPoke;
		this.orderService.updateOrderByPoke(this.order, this.user);
	  //this.router2.navigate("['/profilePoke',this.user.object_id]");
  }
  
  disabling(): boolean{
	  if(this.rating==null)
		return true;
	  else return false;
  
  }
}
