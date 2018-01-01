import { Component, OnInit } from '@angular/core';
import {AuthorizeService} from "../../services/authorize.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(authorizeService: AuthorizeService) { }

  ngOnInit() {
  }

}
