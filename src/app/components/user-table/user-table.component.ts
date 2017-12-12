import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { User } from '../../models/user-test.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
    dataSource = new UserDataSource(this.userService);
    displayedColumns = ['name', 'email', 'phone', 'company'];

    constructor(private userService: UserService) { }

    ngOnInit() {
    }

}

export class UserDataSource extends DataSource<any> {

    constructor(private userService: UserService) {
        super();
    }

    connect(): Observable<User[]> {
        return this.userService.getUser();
    }

    disconnect() {}
}
