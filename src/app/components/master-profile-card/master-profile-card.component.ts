import { Component,Input, OnInit } from '@angular/core';
import {Order} from "../../index";

@Component({
  selector: 'app-master-profile-card',
  templateUrl: './master-profile-card.component.html',
  styleUrls: ['./master-profile-card.component.css']
})
export class MasterProfileCardComponent implements OnInit {

	 @Input() order: Order;

  constructor() { }

  ngOnInit() {
  }

}
