import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pokemon } from './pokemon'; 
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const pokemon = [
      {id: 1, name: 'Bulbasaur', img: null, description: "lorem ipsum dolor sit amet"},
      {id: 4, name: 'Charmander', img: null, description: "lorem ipsum dolor sit amet"},
      {id: 7, name: 'Squirtle', img: null, description: "lorem ipsum dolor sit amet"},
      {id: 25, name: 'Pikachu', img: null, description: "lorem ipsum dolor sit amet"},
      {id: 39, name: 'Jigglypuff', img: null, description: "lorem ipsum dolor sit amet"},
      {id: 61, name: 'Poliwhirl', img: null, description: "lorem ipsum dolor sit amet"},
      {id: 129, name: 'Magikarp', img: null, description: "lorem ipsum dolor sit amet"},
      {id: 133, name: 'Eevee', img: null, description: "lorem ipsum dolor sit amet"},
    ];
    return {pokemon};
  }

  // Overrides the genId method to ensure that a pokemon always has an id.
  // If the pokemon array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(pokemons: Pokemon[]): number {
    return pokemons.length > 0 ? Math.max(...pokemons.map(pokemon => pokemon.id)) + 1: 11;
  }
}
