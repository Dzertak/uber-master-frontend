import {Component, Input, OnInit} from '@angular/core';
import {Master} from "../../models/master.model";

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
