import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from '../../shared/message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroes = new BehaviorSubject<Hero[] | null>(HEROES);
  $heroes = this.heroes.asObservable();

  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    // const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return this.$heroes;  // heroes
  }
}


/*
Hero Service Summary
* refactored data access to the HeroService class
* registered the HeroService as the provider of its service at the root level
* used Angular Dependency Injection to inject it into a component
* gave the HeroService get data method an asynchronous signature
* discovered Observable and the RxJS Observable library
* used RxJS of() to return an observable of mock heroes (Observable<Hero[]>)
* The component's ngOnInit lifecycle hook calls the HeroService method, 
* created a MessageService for loosely-coupled communication between classes
* The HeroService injected into a component is created with another injected  
  service, MessageService
*/