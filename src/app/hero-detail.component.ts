import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { HeroService } from './hero.service';

    @Component({
      selector: 'hero-detail',
      templateUrl: `./hero-detail.component.html`,
      style: [`
        .detail {
                      margin: 0 0 2em 0;
                      list-style-type: none;
                      right: auto;
                      top: auto;
                      left: auto;
                      bottom: 0;
                      width: 80%;
                      padding: 0;
                      width: 15em;
                    }
      `]
    })
    export class HeroDetailComponent implements OnInit {
      @Input() hero: Hero;
      constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
      ) {}
      //ngOnInit(): void {
        //this.route.paramMap
          //.switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
          //.subscribe(hero => this.hero = hero);
      //}
      goBack(): void {
        this.location.back();
      }
    }
