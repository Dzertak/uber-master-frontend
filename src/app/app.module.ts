import {BrowserModule} from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
//import {L_SEMANTIC_UI_MODULE} from "angular2-semantic-ui";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SuiModule} from 'ng2-semantic-ui';

import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-4.x';
import * as  Cloudinary from 'cloudinary-core';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {StartPageComponent} from './components/start-page/start-page.component';
import {ListOrderPageComponent} from './components/list-order-page/list-order-page.component';
import {ListMastersPageComponent} from './components/list-masters-page/list-masters-page.component';
import {ListPokePageComponent} from './components/list-poke-page/list-poke-page.component';
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
import {CardPokeComponent} from './components/card-poke/card-poke.component';
import {OrderFilterPipe} from './pipe/orderFilter.pipe';
import {OrderFilterPipe2} from './pipe/orderFilter2.pipe';
import {ProfilePokeComponent} from './components/profile-poke/profile-poke.component';
import {OrderSearchPipe} from './pipe/orderSearch.pipe';
import {OrderSearchAdminPipe} from './pipe/orderSearchAdmin.pipe';
import {MasterSearchPipe} from './pipe/masterSearch.pipe';
import {PokeSearchPipe} from './pipe/pokeSearch.pipe';
import {CreateOrderPageComponent} from './components/create-order-page/create-order-page.component';
import { MasterProfileCardComponent } from './components/master-profile-card/master-profile-card.component';
import { OrderComponent } from './components/order/order.component';
import {RegistrationService} from "./services/registration.service";
import {FileUploadModule} from "ng2-file-upload";

import { PokeInfoComponent } from './components/poke-info/poke-info.component';
import { MasterInfoComponent } from './components/master-info/master-info.component';
import { MasterComponent } from './components/master/master.component';
import { RateOrderComponent } from './components/rate-order/rate-order.component';
import {HoverCardOrderDirective} from "./directive/hover-card-order.directive";
import { PokeComponent } from './components/poke/poke.component';
import {PokeOrderFilterPipe} from "./pipe/pokeOrderFilter.pipe";
import {OrderFilterProfPipe} from "./pipe/orderFilterProf.pipe";
import { CardCommentComponent } from './components/card-comment/card-comment.component';
import {OrderFilterCommentPipe} from "./pipe/orderFilterComment.pipe";

const routes: Routes = [
  {path: '', pathMatch: 'full', component: AuthorizationPageComponent},
  {path: 'masters', canActivate: [AuthguardGuard], component: ListMastersPageComponent},
  {path: 'orders', canActivate: [AuthguardGuard], component: ListOrderPageComponent},
  {path: 'pokes', canActivate: [AuthguardGuard], component: ListPokePageComponent},
  {path: 'profileMaster/:id', canActivate: [AuthguardGuard], component: ProfileMasterComponent},
  {path: 'profilePoke/:id', canActivate: [AuthguardGuard], component: ProfilePokeComponent},
  {path: 'registration', component: RegistrationPageComponent},
  {path: 'authorization', component: AuthorizationPageComponent},
  {path: 'create-order', canActivate: [AuthguardGuard], component: CreateOrderPageComponent},
  {path: 'order/:id', canActivate: [AuthguardGuard], component: OrderComponent },
  {path: 'master/:id', canActivate: [AuthguardGuard], component: MasterComponent },
  {path: 'poke/:id', canActivate: [AuthguardGuard], component: PokeComponent },
  {path: 'master-info', canActivate: [AuthguardGuard], component: MasterInfoComponent},
  {path: 'poke-info', canActivate: [AuthguardGuard], component: PokeInfoComponent},
  {path: 'rate/:id', canActivate: [AuthguardGuard], component: RateOrderComponent},
  //{path: 'delete/:id', canActivate: [AuthguardGuard], component: ProfilePokeComponent },
  {path: '**', component: NotFoundPageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    ListOrderPageComponent,
    ListMastersPageComponent,
	ListPokePageComponent,
    AuthorizationPageComponent,
    RegistrationPageComponent,
    ProfileMasterComponent,
    NotFoundPageComponent,
    CardOrderComponent,
    CardMasterComponent,
	CardPokeComponent,
    OrderFilterPipe,
	OrderFilterPipe2,
    OrderSearchPipe,
	OrderSearchAdminPipe,
    ProfilePokeComponent,
    MasterSearchPipe,
	PokeSearchPipe,
    CreateOrderPageComponent,
    MasterProfileCardComponent,
    OrderComponent,
    PokeInfoComponent,
    MasterInfoComponent,
    MasterComponent,
    RateOrderComponent,
      HoverCardOrderDirective,
      PokeComponent,
      PokeOrderFilterPipe,
      OrderFilterProfPipe,
      CardCommentComponent,
      OrderFilterCommentPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule,
	//L_SEMANTIC_UI_MODULE,
	SuiModule,
  	CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'dcnt32vmg' , upload_preset: 'mrcxskvw'} as CloudinaryConfiguration),
    ReactiveFormsModule,
    FileUploadModule
  ],
  providers: [AuthorizeService, RegistrationService, AuthguardGuard, OrderService, MasterService, PokeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
