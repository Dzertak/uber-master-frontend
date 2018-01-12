import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../models/order.model";
import {ActivatedRoute} from "@angular/router";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order: Order;
  id:string;
  isLoad: boolean = true;
  constructor(private router: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit() {
    console.log(this.router);
    this.id = this.router.snapshot.params.id;
      this.orderService.getOrder(this.id).subscribe(order => {
        this.order = order;
        this.loading(false);
      })
  }

    loading(status: boolean){
        this.isLoad=status;
    }


}
