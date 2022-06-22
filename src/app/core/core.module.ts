import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './hero/hero.component';
import { MessagesComponent } from '../shared/message/messages.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [HeroesComponent, HeroComponent, MessagesComponent],
  exports: [HeroesComponent, HeroComponent, MessagesComponent],
})
export class CoreModule {}
