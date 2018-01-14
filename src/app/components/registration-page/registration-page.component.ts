import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
declare var $:any;

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  swipe: number = 0;


  constructor(private router: Router) {}

  ngOnInit() {
  }

  authorization(){
    this.router.navigate(['authorization']);
  }

  swipeTab(tab: number){
    this.swipe = tab;
  }

}
