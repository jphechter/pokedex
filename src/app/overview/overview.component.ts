import { Component, OnInit } from '@angular/core';
import { PokemonAPIService } from '../pokemonapi.service';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  pokemon: any [] = [];
  placeholder;

  constructor(private pokemonAPIService: PokemonAPIService) { }
  
  ngOnInit() {
    this.getPokemon();
  }

  getPokemon(): void {
    for(let i = 0; i < 8; i++){
      let id = Math.floor(Math.random() * 500) + 1;
      this.pokemonAPIService.getPokemonByID(id).subscribe(response => {
        this.pokemon.push(response)
      });

    }
  }

}
