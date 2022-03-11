import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokemonListComponent} from "./pokemons/pokemon-list/pokemon-list.component";
import {PokemonDetailComponent} from "./pokemons/pokemon-detail/pokemon-detail.component";

const routes: Routes = [
  {path: 'pokemons', component: PokemonListComponent},
  {path: '', redirectTo: '/pokemons', pathMatch: 'full'},
  {path: 'pokemon/:id', component: PokemonDetailComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
