import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class PokemonAPIService {

  private pokeAPIUrl = 'https://pokeapi.co/api/v2/';  // Real API URL

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient ) {}

  // Get a Pokemon by its ID
  getPokemonByID(id: number) {
    return this.http.get(`${this.pokeAPIUrl}pokemon/${id}`)
  }

  // Get a Pokemon by its name
  getPokemonByName(name: string) {
    return this.http.get(`${this.pokeAPIUrl}pokemon/${name}`)
  }

  // Get all Pokemon
  getAllPokemon() {
    // Rather than call the API to get a count and then again for Pokemon, 10000 seems safe
    return this.http.get(`${this.pokeAPIUrl}pokemon/?limit=10000`)
  }

}
