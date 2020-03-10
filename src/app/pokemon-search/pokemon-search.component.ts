import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Pokemon } from '../pokemon';
import { PokemonAPIService } from '../pokemonapi.service';

@Component({
  selector: 'pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: [ './pokemon-search.component.css' ]
})
export class PokemonSearchComponent implements OnInit {
  pokemon$: Observable<Pokemon[]>;
  private searchTerms = new Subject<string>();

  constructor(private pokemonAPIService: PokemonAPIService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.pokemon$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.pokemonAPIService.searchAllPokemon(term)),
    );
  }
}