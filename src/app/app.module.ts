import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatButtonModule, MatInputModule, MatMenuModule, MatCardModule, MatIconModule} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';

import {RouterModule} from '@angular/router';
import { StartPageComponent } from './components/start-page/start-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,

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
    HttpModule,
      RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
