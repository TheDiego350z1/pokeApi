import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private apiUrl: string = 'https://pokeapi.co/api/v2';
  
  constructor(private http: HttpClient) { }

  buscarPokemon(pokemon: string): Observable<Pokemon> {
    const url = `${this.apiUrl}/pokemon/${pokemon}`;
    return this.http.get<Pokemon>(url);
  }

}
