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
  curPage : number;
  pageSize : number;
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
	this.curPage = 1;
    this.pageSize = 4;
  }

   getSelectedTextValue() {
       this.tag = $('.ui.dropdown').dropdown('get value');
  }

  numberOfPages(){
    return Math.ceil(this.orders.length / this.pageSize);
  };


}
