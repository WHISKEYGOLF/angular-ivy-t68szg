import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  Observable,
  of,
  Subject,
  tap,
  throwError,
} from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from '../../shared/message.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  heroList: Hero[] = [];
  itemsChanged = new Subject<Hero[]>();
  private heroes = new BehaviorSubject<Hero[] | null>(HEROES);
  $heroes = this.heroes.asObservable();

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  addToHeroList(hero: Hero) {
    this.heroList = [...this.heroList, hero];
    this.itemsChanged.next(this.heroList);
  }

  clearCart() {
    alert('clearing cart ... ');
    this.heroList = [];
    this.itemsChanged.next([]);
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.$heroes; // heroes
  }

  getMockHeroResponse() {
    return this.http.get<Hero[]>('/heroes/mock-heroes.json').pipe(
      catchError(this.handleError),
      tap((heroData) => {
        this.heroList = heroData;
        // alert(JSON.stringify(heroData));
      })
    );
  }

  private handleError(errorRes: HttpErrorResponse): Observable<never> {
    let errorMessage = errorRes.error.error.message;

    if (!errorRes.error || !errorRes.error.error) {
      errorMessage = 'An unknow error occured.';
      return throwError(errorMessage);
    }
    return throwError(errorMessage);
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
