import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//import 'hammerjs';

import { AppComponent } from './app.component';

import {RouterModule, Routes} from '@angular/router';
import { StartPageComponent } from './components/start-page/start-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ListOrderPageComponent } from './components/list-order-page/list-order-page.component';
import { ListMastersPageComponent } from './components/list-masters-page/list-masters-page.component';
import { AuthorizationPageComponent } from './components/authorization-page/authorization-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import {AuthorizeService} from "./services/authorize.service";
import {AuthguardGuard} from "./authguard.guard";
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import {JwtHelperService} from "@auth0/angular-jwt";

const routes: Routes = [
    {path: '', component: AuthorizationPageComponent},
     //{path: '**', component: NotFoundPageComponent},
     { path: 'masters',/*canActivate: [AuthguardGuard],*/ component: ListMastersPageComponent },
     { path: 'orders', /*canActivate: [AuthguardGuard],*/ component: ListOrderPageComponent },
    {path: 'profile', /*canActivate: [AuthguardGuard],*/component: ProfilePageComponent},
    {path: 'registration', component: RegistrationPageComponent}

    ];

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    //MainPageComponent,
    ListOrderPageComponent,
    ListMastersPageComponent,
    AuthorizationPageComponent,
    RegistrationPageComponent,
    ProfilePageComponent,
    NotFoundPageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
      BrowserAnimationsModule,
      HttpModule,
      HttpClientModule,
      RouterModule.forRoot(routes)
  ],
    providers: [AuthorizeService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
