import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../index";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-order',
  templateUrl: './card-order.component.html',
  styleUrls: ['./card-order.component.css'],
})
export class CardOrderComponent implements OnInit {


  @Input() order: Order;



  constructor(private router: Router) { }

  ngOnInit() {

  }

  showOrder(){
    this.router.navigate(['/order',this.order.object_id])
  }

  showPoke(){
    console.log(this.order.pokeId);
  }
}
