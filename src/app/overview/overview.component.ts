import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  pokemon: any [] = [];
  placeholder;

  constructor(private pokemonService: PokemonService) { }
  
  ngOnInit() {
    this.getPokemon();
  }

  getPokemon(): void {
    for(let i = 0; i < 6; i++){
      let id = Math.floor(Math.random() * 500) + 1;
      this.pokemonService.getPokemonByID(id).subscribe(response => {
        this.pokemon.push(response)
      });

    }
    // this.pokemonService.getXPokemon(4).subscribe(response => {
    //   this.placeholder = response;
    // })
      // .subscribe(pokemon => this.placeholder = pokemon);
  }
  // .subscribe(pokemon => this.pokemon = pokemon.slice(1, 5));

}
