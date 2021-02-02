import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Pokemon} from './pokemon.model';
import {HttpClient} from '@angular/common/http';
import {ApiResponse} from './apiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/pokemons';

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.url);
  }
}
