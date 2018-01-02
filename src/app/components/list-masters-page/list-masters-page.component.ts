import { Component, OnInit } from '@angular/core';
import {AuthorizeService} from '../../services/authorize.service';

@Component({
  selector: 'app-list-masters-page',
  templateUrl: './list-masters-page.component.html',
  styleUrls: ['./list-masters-page.component.css'],
   // providers: [AuthorizeService]
})
export class ListMastersPageComponent implements OnInit {

    userName: string;

    constructor(private authorizeService: AuthorizeService) { }

    ngOnInit() {
        this.userName = this.authorizeService.username;
     /*   this.authorizeService.getAuthorizeUser().subscribe(users => {
          this.users = users;
        })*/
    }
}
