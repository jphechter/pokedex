import { Injectable } from '@angular/core';
import { PokemonAPIService } from './pokemonapi.service';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  allPokemon: any = [];
  listAllPokemon: [Pokemon] = [null];

  constructor(private pokemonAPIService: PokemonAPIService) {
    // TODO: add a loading screen while this is running
    // OR find a better API to draw all data from
     this.getAllPokemon();
   }

  getAllPokemon(): any {
    /* Gets all Pokemon from PokeAPI */
    this.pokemonAPIService.getAllPokemon()
      .subscribe(response => {
        response['results'].map(result => {
          this.pokemonAPIService.getPokemonByName(result['name'])
            .subscribe(pokemon => {
              this.listAllPokemon.push(new Pokemon(pokemon))

              // TODO: rip this out
              let types = pokemon['types'].map(type => type['type']['name']);
              pokemon['types'] = types;
              this.allPokemon.push(pokemon);
              this.sortPokemon(this.allPokemon);
            });
        })
      });
  }

  sortPokemon(pokemon) {
    pokemon.sort((pokemon1, pokemon2) => {
      // Sort by type first
      if (pokemon1['types'][0] > pokemon2['types'][0]) return 1;
      if (pokemon1['types'][0] < pokemon2['types'][0]) return -1;

      // then by name
      if (pokemon1['name'][0] > pokemon2['name'][0]) return 1;
      if (pokemon1['name'][0] < pokemon2['name'][0]) return -1;
    });
    return pokemon;
  }

}
