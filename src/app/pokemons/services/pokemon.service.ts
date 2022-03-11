import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Pokemon} from "../models/pokemon";
import {PagedData} from "../models/paged-data";


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl: string = "http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/";
  private pokemonsEndPoint: string = "pokemons";

  constructor(private http: HttpClient) {
  }

  getPokemons(offset: number, limit: number): Observable<PagedData<Pokemon>> {
    const params = new HttpParams()
      .set('offset', offset)
      .set('limit', limit);
    return this.http.get<PagedData<Pokemon>>(this.apiUrl + this.pokemonsEndPoint, {params});
  }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.apiUrl + this.pokemonsEndPoint + "/" + id);
  }


}
