import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonAPIService } from '../pokemonapi.service';
import { Pokemon } from '../pokemon';


@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: any;
  // pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokemonAPIService: PokemonAPIService,

  ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemonAPIService.getPokemonByID(id).subscribe(response => {
      this.pokemon = response;
    });
  }

}
