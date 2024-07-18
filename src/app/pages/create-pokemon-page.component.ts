import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokedexService } from '../shared/pokedex.service';
import { Pokemon } from '../shared/pokemon';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-pokemon-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-pokemon-page.component.html'
})
export class CreatePokemonPageComponent {
  constructor(private pokedexService: PokedexService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const newPokemon = new Pokemon(
        form.value.name,
        form.value.imageUrl,
        'A new pokemon'
      );
      this.pokedexService.addPokemon(newPokemon);
      form.reset();
      this.router.navigate(['/']); // Navigate to the home page
    }
  }
}

