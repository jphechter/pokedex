import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonAPIService } from '../pokemonapi.service';
import { Pokemon } from '../pokemon';


@Component({
  selector: 'detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokemonAPIService: PokemonAPIService,
  ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // TODO: This should pull from PokemonService
    this.pokemonAPIService.getPokemonByID(id).subscribe(response => {
      this.pokemon = new Pokemon(response);
    });
  }

}
