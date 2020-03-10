import { Injectable } from '@angular/core';
import { PokemonAPIService } from './pokemonapi.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonsters: any = [];

  constructor(private pokemonAPIService: PokemonAPIService) {
    this.getAllPokemon();
   }

  getAllPokemon(): void {
    let pokemonNames = [];
    this.pokemonAPIService.getAllPokemon()
      .subscribe(response => {
        response['results'].forEach(result => {
          pokemonNames.push(result['name']);
        });
        pokemonNames.forEach(name => {
          this.pokemonAPIService.getPokemonByName(name)
            .subscribe(pokemon => {
              // TODO: This should really create instances of a Pokemon class 
              let types = pokemon['types'].map(type => type['type']['name']);
              pokemon['types'] = types;
              this.pokemonsters.push(pokemon)
            });
        })
      });
  }

}
