import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Pokemon} from '../pokemon.model';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit, OnChanges {

  @Input() id?: number;
  pokemon!: Pokemon;

  constructor(public route: ActivatedRoute, private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.id && changes.id.currentValue !== changes.id.previousValue){
      this.pokemonService.getPokemon(String(this.id)).subscribe(response => this.pokemon = response);
    }
  }
}
