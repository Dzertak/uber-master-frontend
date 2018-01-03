import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../models/order.model";

@Component({
  selector: 'app-card-order',
  templateUrl: './card-order.component.html',
  styleUrls: ['./card-order.component.css'],
})
export class CardOrderComponent implements OnInit {


  @Input() order: Order;


  constructor() { }

  ngOnInit() {

  }

}
