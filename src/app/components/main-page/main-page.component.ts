
import { Component, OnInit } from '@angular/core';
import {AuthorizeService} from "../../services/authorize.service";
import {Router, RouterModule, Routes} from "@angular/router";
import {ListMastersPageComponent} from "../list-masters-page/list-masters-page.component";
import {ListOrderPageComponent} from "../list-order-page/list-order-page.component";



export const rout: Routes = ([
    { path: '/main/masters', component: ListMastersPageComponent },
    { path: '/main/orders', component: ListOrderPageComponent }
])
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  constructor(private authorizeService: AuthorizeService, private router: Router) {
  }

  ngOnInit() {

  }
    /*logoutUser(){
        this.authorizeService.setUserLoggedIn(false);
        this.router.navigate(['/']);
    }*/

}
