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
    this.pokemon = this.pokemonService.pokemonsters;
  }

  search(searchString) {
    this.pokemon = this.pokemonService.pokemonsters;
    searchString = searchString.trim();
    let name, types;
    this.pokemon = this.pokemon.filter((pokemon) => {
      // name = pokemon['name'];
      // pokemon['types'].array.forEach(type => {
      //   types += type;
      // });
      if ( pokemon['name'].search(searchString) > -1){
        return pokemon;
      };
    })
  }

}
