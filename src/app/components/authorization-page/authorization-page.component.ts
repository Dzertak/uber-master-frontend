import { Component, OnInit } from '@angular/core';
import {AuthorizeService} from '../../services/authorize.service';
import {log} from 'util';

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.css'],
    providers: [AuthorizeService]
})
export class AuthorizationPageComponent implements OnInit {

  users = [];

  constructor(private authorizeService: AuthorizeService) { }

  ngOnInit() {
    this.authorizeService.getAuthorizeUser().subscribe(users => {
      console.log(users)
    })
  }

}
