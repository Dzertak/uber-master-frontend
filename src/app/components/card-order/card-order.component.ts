import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../index";

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
