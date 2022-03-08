import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Pokemon} from "../models/pokemon";
import {PagedData} from "../models/paged-data";


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonUrl: string = "http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/";
  private pokemonsEndPoint: string = "pokemons";

  constructor(private http: HttpClient) {
  }

  getPokemons(): Observable<PagedData<Pokemon>> {
    return this.http.get<PagedData<Pokemon>>(this.pokemonUrl + this.pokemonsEndPoint);
  }


}
