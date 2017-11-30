import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


const classes = [
    {name: 'Poke'},
    {name: 'Master'},
    {name: 'Order'} ];

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {

    title = 'UberMaster';
    classes = classes;

    user = {
        id: String,
        login: String,
        password: String
    };

    constructor(private http: Http) { }

  ngOnInit() {
  }
    getEntity(newId: HTMLInputElement, newClass: HTMLOptionElement) {
        window.alert('id: ' + newId.value + ' Class: ' + newClass.value);
        return false;
    }
}
