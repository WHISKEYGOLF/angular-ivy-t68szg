import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [HeroesComponent, HeroComponent],
  exports: [HeroesComponent, HeroComponent],
})
export class CoreModule {}
