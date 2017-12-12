import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatButtonModule, MatInputModule, MatMenuModule, MatCardModule, MatIconModule} from '@angular/material';
import {MatFormFieldModule, MatOptionModule, MatDialogModule} from '@angular/material';
import { MatTableModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';

import {RouterModule} from '@angular/router';
import { StartPageComponent } from './components/start-page/start-page.component';
import { AuthorizeDialodComponent } from './components/authorize-dialod/authorize-dialod.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import {UserService} from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    AuthorizeDialodComponent,
    UserTableComponent,

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
    HttpModule,
      HttpClientModule,

      RouterModule
  ],
    entryComponents: [
        AuthorizeDialodComponent
    ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
