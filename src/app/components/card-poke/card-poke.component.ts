import {Component, Input, OnInit} from '@angular/core';
import {Poke} from "../../index";

@Component({
  selector: 'app-card-poke',
  templateUrl: './card-poke.component.html',
  styleUrls: ['./card-poke.component.css'],
})
export class CardPokeComponent implements OnInit {


  @Input() poke: Poke;


  constructor() { }

  ngOnInit() {

  }

}
