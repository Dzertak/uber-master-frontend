import {Component, Input, OnInit} from '@angular/core';
import {AuthorizeService} from "../../services/authorize.service";
import {Order} from "../../index";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-list-order-page',
  templateUrl: './list-order-page.component.html',
  styleUrls: ['./list-order-page.component.css']
})
export class ListOrderPageComponent implements OnInit {


  isLoad: boolean = true;

  orders = [];

  loading(status: boolean){
    this.isLoad=status;
  }
  constructor(private authorizeService: AuthorizeService, private orderService:OrderService) { }

  ngOnInit() {
    this.orderService.getOrderList().subscribe(orders => {
      this.loading(false);
      this.orders = orders;
    })
  }

}
