//import { NgModule }      from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule }   from '@angular/forms';
//import { AppComponent }  from './app.component';

import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AngularMaterialModule} from './ngmaterial.module';
import {HomeModule} from './home/home.module';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
                  BrowserAnimationsModule, AppRoutingModule,
                  AngularMaterialModule,
                  HomeModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
