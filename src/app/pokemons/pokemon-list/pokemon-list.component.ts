import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../models/pokemon";
import {PokemonService} from "../services/pokemon.service";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  offset: number = 0;
  limit: number = 15;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.load();
  }

  onScrollDown(ev: any) {
    this.load();
  }

  private load(): void {
    this.pokemonService.getPokemons(this.offset, this.limit).subscribe(pokemons => {
        this.pokemons = this.pokemons.concat(pokemons.data);
        this.offset += pokemons.data.length;
      }
    )
  }
}
