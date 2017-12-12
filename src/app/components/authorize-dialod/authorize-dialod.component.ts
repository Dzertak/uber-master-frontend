import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-authorize-dialod',
  templateUrl: './authorize-dialod.component.html',
  styleUrls: ['./authorize-dialod.component.css']
})
export class AuthorizeDialodComponent implements OnInit {

    login: String;
    password: String;
    // dataAuthorize: [String, String];

    constructor(public thisDialogRef: MatDialogRef<AuthorizeDialodComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

    ngOnInit() {
    }

    onCloseConfirm() {
       // this.thisDialogRef.componentInstance.login = this.login;
       // this.dataAuthorize = [this.login, this.password];
        this.thisDialogRef.close('Confirm');

    }

    onCloseCancel() {
        this.thisDialogRef.close('Cancel');
    }


}
