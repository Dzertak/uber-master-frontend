import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GetUsersComponent } from './get-users/get-users.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    GetUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
