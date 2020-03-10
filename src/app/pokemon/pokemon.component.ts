import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../pokemon';
import { PokemonAPIService } from '../pokemonapi.service';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemon: any = [];

  constructor(
    private pokemonAPIService: PokemonAPIService,
    private pokemonService: PokemonService,
    ) { }
  
  ngOnInit(): void {
    this.pokemon = this.pokemonService.pokemonsters;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.pokemonAPIService.addPokemon({ name } as Pokemon)
      .subscribe(pokemon => {
        this.pokemon.push(pokemon);
      });
  }

  delete(pokemon: Pokemon): void {
    this.pokemon = this.pokemon.filter(p => p !== pokemon);
    this.pokemonAPIService.deletePokemon(pokemon).subscribe();
  }

}
