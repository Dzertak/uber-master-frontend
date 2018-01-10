import {Component, Input, OnInit} from '@angular/core';
import {Master} from "../../index";

@Component({
  selector: 'app-card-master',
  templateUrl: './card-master.component.html',
  styleUrls: ['./card-master.component.css'],
})
export class CardMasterComponent implements OnInit {


  @Input() master: Master;


  constructor() { }

  ngOnInit() {

  }

}
