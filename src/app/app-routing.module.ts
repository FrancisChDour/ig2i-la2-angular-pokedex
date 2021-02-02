import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonsListComponent} from './pokemons/pokemons-list/pokemons-list.component';
import {PokemonDetailComponent} from './pokemons/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { path: 'pokemons', component: PokemonsListComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
