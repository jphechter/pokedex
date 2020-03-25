import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  allPokemon: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.allPokemon = this.pokemonService.allPokemon;
  }

  search(searchString) {
    this.allPokemon = this.pokemonService.allPokemon;
    searchString = searchString.trim();
    this.allPokemon = this.allPokemon.filter((pokemon) => {
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
