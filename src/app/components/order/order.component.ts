import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../models/order.model";
import {ActivatedRoute} from "@angular/router";
import {OrderService} from "../../services/order.service";
import {AuthorizeService} from "../../services/authorize.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order: Order;
  id:string;
  isLoad: boolean = true;


  user: User;

  constructor(private router: ActivatedRoute, private orderService: OrderService, private authorizeService: AuthorizeService) { }

  ngOnInit() {
    this.id = this.router.snapshot.params.id;
    this.user = this.authorizeService.getUser();
      this.orderService.getOrder(this.id).subscribe(order => {
        this.order = order;
        this.loading(false);
      })
  }

    loading(status: boolean){
        this.isLoad=status;
    }

    isMaster(){
      if (this.user.classType=='Master'){
        return true;
      }
      return false;
    }

    joinIt(){

    }

}
