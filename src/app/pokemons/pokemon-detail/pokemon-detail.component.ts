import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Pokemon} from '../pokemon.model';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  id!: string;
  pokemon!: Pokemon;

  constructor(public route: ActivatedRoute, private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.id = id;
      this.pokemonService.getPokemon(id).subscribe(response => this.pokemon = response);
    }
  }
}
