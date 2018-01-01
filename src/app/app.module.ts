import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatToolbarModule, MatButtonModule, MatInputModule, MatMenuModule, MatCardModule, MatIconModule,
    MatTabsModule, MatSidenavModule
} from '@angular/material';
import {MatFormFieldModule, MatOptionModule, MatDialogModule} from '@angular/material';
import { MatTableModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';

import {RouterModule, Routes} from '@angular/router';
import { StartPageComponent } from './components/start-page/start-page.component';
import { AuthorizeDialodComponent } from './components/authorize-dialod/authorize-dialod.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ListOrderPageComponent } from './components/list-order-page/list-order-page.component';
import { ListMastersPageComponent } from './components/list-masters-page/list-masters-page.component';
import { AuthorizationPageComponent } from './components/authorization-page/authorization-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import {AuthorizeService} from "./services/authorize.service";
import {AuthguardGuard} from "./authguard.guard";

const routes: Routes = [
    {path: 'main', canActivate: [AuthguardGuard], component: MainPageComponent},
    {path: '', component: AuthorizationPageComponent},
    {path: 'profile', component: ProfilePageComponent},
    {path: 'masters', component: ListMastersPageComponent},
    {path: 'registration', component: RegistrationPageComponent}

    ];

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    AuthorizeDialodComponent,
    MainPageComponent,
    ListOrderPageComponent,
    ListMastersPageComponent,
    AuthorizationPageComponent,
    RegistrationPageComponent,
    ProfilePageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatButtonModule,
      MatMenuModule,
      MatCardModule,
      MatIconModule,
      MatToolbarModule,
      MatFormFieldModule,
      MatOptionModule,
      MatDialogModule,
      MatTableModule,
      MatTabsModule,
      HttpModule,
      HttpClientModule,
      MatSidenavModule,
      RouterModule.forRoot(routes)
  ],
    providers: [AuthorizeService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
