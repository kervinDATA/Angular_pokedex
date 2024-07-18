import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './pokemons-mock';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private pokemons: Pokemon[] = POKEMONS;

  getPokemons(): Pokemon[] {
    return this.pokemons;
  }

  addPokemon(pokemon: Pokemon): void {
    this.pokemons.push(pokemon);
  }
}
