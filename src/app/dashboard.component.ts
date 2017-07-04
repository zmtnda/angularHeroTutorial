import { Component, OnInit, ViewChild } from '@angular/core';
    import { Router } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from './hero';
import { HeroService } from './hero.service';



@Component({
  selector: 'my-dashboard',
  templateUrl: `./app.component.html`,
  directives:[ HeroesComponent, HeroDetailComponent ]
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero;
  showDetail: false;
  constructor(
        private router: Router,
        private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
  onNotify(message:Hero):void {
      this.selectedHero = message;
    }
  gotoDetail(): void {
  this.showDetail = true;
    console.log(this.showDetail);

    //this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
