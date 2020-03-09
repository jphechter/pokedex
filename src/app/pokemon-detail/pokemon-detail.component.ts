import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  @Input() pokemon;
  
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location,
    
  ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemonByID(id).subscribe(response => {
      this.pokemon = response;
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.pokemonService.updatePokemon(this.pokemon)
    .subscribe(() => this.goBack());
  }

}
