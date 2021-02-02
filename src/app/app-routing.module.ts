import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonsListComponent} from './pokemons/pokemons-list/pokemons-list.component';

const routes: Routes = [
  { path: 'pokemons', component: PokemonsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
