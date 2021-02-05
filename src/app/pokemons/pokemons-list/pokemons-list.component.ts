import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../pokemon.model';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent implements OnInit {

  pokemons!: Pokemon[];

  @Output() pokemonEventEmitter =  new EventEmitter<number>();

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(response => this.pokemons = response.data);
  }

  onScroll(): void {
    console.log('Scrolled');
  }

  onSelect(pokemon: Pokemon): void {
    this.pokemonEventEmitter.emit(pokemon.id);
  }
}
