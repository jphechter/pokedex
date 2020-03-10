import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Pokemon } from './pokemon';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class PokemonAPIService {

  private pokeAPIUrl = 'https://pokeapi.co/api/v2/';  // Real API URL 

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

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
    // Rather than call the API to get a count and then again for Pokemon, 999999 seems safe
    return this.http.get(`${this.pokeAPIUrl}pokemon/?limit=999999`)
  } 

  /* GET all pokemon whose name contains search term */
  searchAllPokemon(term: string) {
    if (!term.trim()) {
      // if not search term, return empty Pokemon array.
      return of([]);
    }
    return this.http.get<Pokemon[]>(`${this.pokeAPIUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found all pokemon matching "${term}"`) :
         this.log(`no pokemon matching "${term}"`)),
      catchError(this.handleError<Pokemon[]>('searchAllPokemon', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new Pokemon to the server */
  addPokemon (pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(this.pokeAPIUrl, pokemon, this.httpOptions).pipe(
      tap((newPokemon: Pokemon) => this.log(`added pokemon w/ id=${newPokemon.id}`)),
      catchError(this.handleError<Pokemon>('addPokemon'))
    );
  }

  /** DELETE: delete the Pokemon from the server */
  deletePokemon (pokemon: Pokemon | number): Observable<Pokemon> {
    const id = typeof pokemon === 'number' ? pokemon : pokemon.id;
    const url = `${this.pokeAPIUrl}/${id}`;

    return this.http.delete<Pokemon>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted pokemon id=${id}`)),
      catchError(this.handleError<Pokemon>('deletePokemon'))
    );
  }

  /** PUT: update the Pokemon on the server */
  updatePokemon (pokemon: Pokemon): Observable<any> {
    return this.http.put(this.pokeAPIUrl, pokemon, this.httpOptions).pipe(
      tap(_ => this.log(`updated pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>('updatedPokemon'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a PokemonAPIService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PokemonAPIService: ${message}`);
  }
}