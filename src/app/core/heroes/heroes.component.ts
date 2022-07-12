import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../shared/message.service';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes!: Hero[];
  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    public messageService: MessageService
  ) {}

  ngOnInit() {
    // this.heroService.$heroes.subscribe((heroData: Hero[]) => {
    //   this.heroes = heroData;
    // });

    this.heroService.getMockHeroResponse().subscribe((heroData: Hero[]) => {
      this.heroes = heroData;
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent hero id: ${hero.id}`);
  }
}
