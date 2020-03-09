import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { MessagesComponent } from './messages/messages.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  declarations: [
    AppComponent,
    OverviewComponent,
    PokemonComponent,
    PokemonDetailComponent,
    MessagesComponent,
    PokemonSearchComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
