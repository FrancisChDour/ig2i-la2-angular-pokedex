import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    PokemonsListComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule
  ]
})
export class PokemonsModule { }
