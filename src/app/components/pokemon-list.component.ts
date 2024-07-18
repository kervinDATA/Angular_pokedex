import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../shared/pokemon';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html'
})
export class PokemonListComponent {
  @Input() pokemons: Pokemon[] = [];
  @Output() pokemonSelected = new EventEmitter<Pokemon>();

  selectPokemon(pokemon: Pokemon) {
    this.pokemonSelected.emit(pokemon);
  }
}
