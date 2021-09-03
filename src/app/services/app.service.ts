import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  /* ---------- Item details ---------- */
  itemDetails;

  constructor(private http: HttpClient) { }
  
  /* ---------- Data ---------- */
  getInfo(user) {
    return this.http.post(environment.loginBarracks, user);
  }

  getNasa() {
    return this.http.get(environment.nasaAPI);
  }

  getPokemon() {
    return this.http.get(environment.pokemonAPI);
  }

  getPokemonItem(name) {
    return this.http.get(environment.pokemonAPI + name);
  }
}
