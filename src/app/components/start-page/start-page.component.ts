import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AuthorizeDialodComponent} from '../authorize-dialod/authorize-dialod.component';


@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent {

    login: string;
    password: string;
    dialogResult = '';

    constructor(public dialog: MatDialog) {}

    openDialog(): void {
        const dialogRef = this.dialog.open(AuthorizeDialodComponent, {
            width: '400x',
            data: { login: this.login, password: this.password }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.login = result.login;
            this.dialogResult = result;
            window.alert('Типа вошел!')
        });
    }
}
