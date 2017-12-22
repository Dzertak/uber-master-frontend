import { Component, OnInit } from '@angular/core';
import {AuthorizeService} from '../../services/authorize.service';
import {log} from 'util';
import {Master} from "../../models/master.model";
import {MasterTestModel} from "../../models/master-test.model";

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.css'],
    providers: [AuthorizeService]
})
export class AuthorizationPageComponent implements OnInit {


  masterTest: MasterTestModel;

  constructor(private authorizeService: AuthorizeService) { }

  ngOnInit() {
    this.authorizeService.getAuthorizeUser().subscribe(user => {
      //this.masterTest = user;
      this.masterTest.name = user.name;
    })
  }

}
