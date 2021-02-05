import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatButton, MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    PokemonsListComponent,
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatButtonModule,
    RouterModule
  ]
})
export class PokemonsModule { }
