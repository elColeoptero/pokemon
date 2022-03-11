import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../services/pokemon.service";
import {Pokemon} from "../models/pokemon";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemon ?: Pokemon;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemonService.getPokemonById(id).subscribe(pokemon => {
      this.pokemon = pokemon
    });
  }

  playAudio(): void {
    const audio: HTMLAudioElement = <HTMLAudioElement>document.getElementById("pokemonAudio");
    audio.play();
  }

}
