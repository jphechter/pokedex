import { Component, OnInit } from '@angular/core';
import { PokemonAPIService } from '../pokemonapi.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  randomPokemon: Pokemon[] = [];

  constructor( private pokemonAPIService: PokemonAPIService ) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon(): void {
    for(let i = 0; i < 8; i++){
      let id = Math.floor(Math.random() * 500) + 1;
      // TODO: Rather than make additional calls to the API,
      // this should use data collected in PokemonService.
      this.pokemonAPIService.getPokemonByID(id).subscribe(response => {
        this.randomPokemon.push(new Pokemon(response));
      });
    }
  }

}
