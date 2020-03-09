import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemon: Pokemon[];

  constructor(private pokemonService: PokemonService) { }
  
  ngOnInit(): void {
    this.getAllPokemon();
  }

  getAllPokemon(): void {
      this.pokemonService.getAllPokemon()
        // .subscribe(pokemon => this.pokemon = pokemon);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.pokemonService.addPokemon({ name } as Pokemon)
      .subscribe(pokemon => {
        this.pokemon.push(pokemon);
      });
  }

  delete(pokemon: Pokemon): void {
    this.pokemon = this.pokemon.filter(p => p !== pokemon);
    this.pokemonService.deletePokemon(pokemon).subscribe();
  }

}
