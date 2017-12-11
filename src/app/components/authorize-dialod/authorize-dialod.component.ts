import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-authorize-dialod',
  templateUrl: './authorize-dialod.component.html',
  styleUrls: ['./authorize-dialod.component.css']
})
export class AuthorizeDialodComponent implements OnInit {

    constructor(public thisDialogRef: MatDialogRef<AuthorizeDialodComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

    ngOnInit() {
    }

    onCloseConfirm() {
        this.thisDialogRef.close('Confirm');
    }

    onCloseCancel() {
        this.thisDialogRef.close('Cancel');
    }


}
