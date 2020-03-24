import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemon: any;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemon = this.pokemonService.allPokemon;
  }

  search(searchString) {
    this.pokemon = this.pokemonService.allPokemon;
    searchString = searchString.trim();
    this.pokemon = this.pokemon.filter((pokemon) => {
      let pokemonSearchString = this.createPokemonSearchString(pokemon);
      if ( pokemonSearchString.search(searchString) > -1 ){
        return pokemon;
      };
    })
  }

  createPokemonSearchString(pokemon) {
    /*
    This function makes one string consisting of all searchable
    params (name, type(s), and stats)and then looks for a portion
    that may match.

    EX: Bulbasaur -> bulbasaurpoisongrass
    */
    let pokemonSearchString = pokemon['name'];
    pokemon['types'].forEach(type => {
      pokemonSearchString += type;
    });
    return pokemonSearchString;
  }

}
