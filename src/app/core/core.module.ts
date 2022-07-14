import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './hero/hero.component';
import { MessagesComponent } from '../shared/message/messages.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [HeroesComponent, HeroComponent, MessagesComponent],
  exports: [HeroesComponent, HeroComponent, MessagesComponent, HttpClientModule],
})
export class CoreModule {}
