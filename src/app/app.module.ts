<<<<<<< HEAD
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
=======
    import { NgModule }       from '@angular/core';
    import { BrowserModule }  from '@angular/platform-browser';
    import { AppRoutingModule }     from './app-routing.module';
    import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
    import {MdButtonModule, MdCheckboxModule} from '@angular/material';

    import { FormsModule }    from '@angular/forms';

    import { AppComponent }         from './app.component';
    import { DashboardComponent }   from './dashboard.component';
    import { HeroDetailComponent }  from './hero-detail.component';
    import { HeroesComponent }      from './heroes.component';
    import { HeroService }          from './hero.service';
    import 'hammerjs';
    import { MenuComponent } from './menu.component';
    import { FlexLayoutModule } from "@angular/flex-layout";

    @NgModule({
      imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdCheckboxModule,
        FlexLayoutModule
      ],
      declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        MenuComponent
      ],
      providers: [ HeroService ],
      bootstrap: [ AppComponent ]
    })
    export class AppModule { }
>>>>>>> fd0864e7688f4a916dfe8a8a1a1727c57cf89b1a
