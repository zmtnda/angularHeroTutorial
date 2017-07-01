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

    @NgModule({
      imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdCheckboxModule,
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
