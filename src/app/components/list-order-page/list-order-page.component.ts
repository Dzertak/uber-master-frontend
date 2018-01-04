import {Component, Input, OnInit} from '@angular/core';
import {AuthorizeService} from "../../services/authorize.service";
import {Order} from "../../index";
import {OrderService} from "../../services/order.service";
declare var $:any;

@Component({
  selector: 'app-list-order-page',
  templateUrl: './list-order-page.component.html',
  styleUrls: ['./list-order-page.component.css']
})
export class ListOrderPageComponent implements OnInit {

  tag: string = '';
  isLoad: boolean = true;

  orders = [];

  loading(status: boolean){
    this.isLoad=status;
  }
  constructor(private authorizeService: AuthorizeService, private orderService:OrderService) { }

  ngOnInit() {
    $('.ui.dropdown').dropdown();

    this.orderService.getOrderList().subscribe(orders => {
      this.loading(false);
      this.orders = orders;
    })
  }

   getSelectedTextValue() {
       this.tag = $('.ui.dropdown').dropdown('get value');
  }


}
