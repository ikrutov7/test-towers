import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TowersService} from './towers/towers.sevice';
import { AppComponent } from './app.component';
import { TowersComponent } from './towers/towers.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TowersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [TowersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
