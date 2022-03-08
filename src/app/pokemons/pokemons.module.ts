import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {HttpClientModule} from "@angular/common/http";
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatListModule
  ]
})
export class PokemonsModule {
}
