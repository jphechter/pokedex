import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { MessagesComponent } from './messages/messages.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    OverviewComponent,
    PokemonComponent,
    PokemonDetailComponent,
    MessagesComponent,
    PokemonSearchComponent,
    PokemonListComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
