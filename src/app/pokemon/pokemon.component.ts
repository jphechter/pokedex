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

}
