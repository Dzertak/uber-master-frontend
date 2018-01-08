import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//import 'hammerjs';

import { AppComponent } from './app.component';

import {RouterModule, Routes} from '@angular/router';
import { StartPageComponent } from './components/start-page/start-page.component';
import { ListOrderPageComponent } from './components/list-order-page/list-order-page.component';
import { ListMastersPageComponent } from './components/list-masters-page/list-masters-page.component';
import { AuthorizationPageComponent } from './components/authorization-page/authorization-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import {AuthorizeService} from "./services/authorize.service";
import {AuthguardGuard} from "./authguard.guard";
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { CardOrderComponent } from './components/card-order/card-order.component';
import {OrderService} from "./services/order.service";
import {MasterService} from "./services/master.service";
import { CardMasterComponent } from './components/card-master/card-master.component';
import {OrderFilterPipe} from "./pipe/orderFilter.pipe";

const routes: Routes = [
    {path: '', pathMatch:'full', component: AuthorizationPageComponent},
     { path: 'masters',canActivate: [AuthguardGuard], component: ListMastersPageComponent },
     { path: 'orders', canActivate: [AuthguardGuard], component: ListOrderPageComponent },
    {path: 'profile', canActivate: [AuthguardGuard],component: ProfilePageComponent},
    {path: 'registration', component: RegistrationPageComponent},
    {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    ListOrderPageComponent,
    ListMastersPageComponent,
    AuthorizationPageComponent,
    RegistrationPageComponent,
    ProfilePageComponent,
    NotFoundPageComponent,
    CardOrderComponent,
    CardMasterComponent,
    OrderFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
      BrowserAnimationsModule,
      HttpModule,
      HttpClientModule,
      RouterModule.forRoot(routes),
	  NgxPaginationModule// <-- include it in your app module
  ],
    providers: [AuthorizeService, AuthguardGuard, OrderService, MasterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
