import {BrowserModule} from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-4.x';
import * as  Cloudinary from 'cloudinary-core';
NgModule({
  imports: [
    CloudinaryModule.forRoot({Cloudinary}, { cloud_name: 'ubermaster' } as CloudinaryConfiguration),
    //FileUploadModule,
  ],
})


//import 'hammerjs';

import {AppComponent} from './app.component';

import {RouterModule, Routes} from '@angular/router';
import {StartPageComponent} from './components/start-page/start-page.component';
import {ListOrderPageComponent} from './components/list-order-page/list-order-page.component';
import {ListMastersPageComponent} from './components/list-masters-page/list-masters-page.component';
import {AuthorizationPageComponent} from './components/authorization-page/authorization-page.component';
import {RegistrationPageComponent} from './components/registration-page/registration-page.component';
import {ProfileMasterComponent} from './components/profile-master/profile-master.component';
import {AuthorizeService} from './services/authorize.service';
import {AuthguardGuard} from './authguard.guard';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import {CardOrderComponent} from './components/card-order/card-order.component';
import {OrderService} from './services/order.service';
import {MasterService} from './services/master.service';
import {PokeService} from './services/poke.service';
import {CardMasterComponent} from './components/card-master/card-master.component';
import {OrderFilterPipe} from './pipe/orderFilter.pipe';
import {ProfilePokeComponent} from './components/profile-poke/profile-poke.component';
import {OrderSearchPipe} from './pipe/orderSearch.pipe';
import {MasterSearchPipe} from './pipe/masterSearch.pipe';
import {CreateOrderPageComponent} from './components/create-order-page/create-order-page.component';
import { MasterProfileCardComponent } from './components/master-profile-card/master-profile-card.component';
import { OrderComponent } from './components/order/order.component';
import {RegistrationService} from "./services/registration.service";
import {FileUploadModule} from "ng2-file-upload";
//import {FileUploadModule} from "ng2-file-upload";

const routes: Routes = [
  {path: '', pathMatch: 'full', component: AuthorizationPageComponent},
  {path: 'masters', canActivate: [AuthguardGuard], component: ListMastersPageComponent},
  {path: 'orders', canActivate: [AuthguardGuard], component: ListOrderPageComponent},
  {path: 'profileMaster/:id', canActivate: [AuthguardGuard], component: ProfileMasterComponent},
  {path: 'profilePoke/:id', canActivate: [AuthguardGuard], component: ProfilePokeComponent},
  {path: 'registration', component: RegistrationPageComponent},
  {path: 'authorization', component: AuthorizationPageComponent},
  {path: 'create-order', canActivate: [AuthguardGuard], component: CreateOrderPageComponent},
  {path: 'order/:id', canActivate: [AuthguardGuard], component: OrderComponent },
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
    ProfileMasterComponent,
    NotFoundPageComponent,
    CardOrderComponent,
    CardMasterComponent,
    OrderFilterPipe,
    OrderSearchPipe,
    ProfilePokeComponent,
    MasterSearchPipe,
    CreateOrderPageComponent,
    MasterProfileCardComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [AuthorizeService, RegistrationService, AuthguardGuard, OrderService, MasterService, PokeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
