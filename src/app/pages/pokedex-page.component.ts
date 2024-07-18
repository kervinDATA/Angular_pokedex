import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../shared/pokedex.service';
import { Pokemon } from '../shared/pokemon';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from '../components/pokemon-list.component';
import { PokemonDetailComponent } from '../components/pokemon-detail.component';

@Component({
  selector: 'app-pokedex-page',
  standalone: true,
  imports: [CommonModule, PokemonListComponent, PokemonDetailComponent],
  templateUrl: './pokedex-page.component.html'
})
export class PokedexPageComponent implements OnInit {
  pokemons: Pokemon[] = [];
  selectedPokemon: Pokemon | null = null;

  constructor(private pokedexService: PokedexService) {}

  ngOnInit() {
    this.pokemons = this.pokedexService.getPokemons();
  }

  onPokemonSelected(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }
}
