import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {HttpClientModule} from "@angular/common/http";
import {MatListModule} from "@angular/material/list";
import {PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';
import {AppRoutingModule} from "../app-routing.module";


@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatListModule,
    AppRoutingModule
  ]
})
export class PokemonsModule {
}
