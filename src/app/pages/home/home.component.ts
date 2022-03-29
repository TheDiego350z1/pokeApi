import { Component } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';

import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  hayError: boolean = false;
  termino: string = '';
  pokemon!: Pokemon;

  constructor(private pokeService: PokeService) { }

  buscar(pokemon: string) {
    this.hayError = false;
    this.termino = pokemon; 

    this.pokeService.buscarPokemon(this.termino)
      .subscribe( (resp) => {
        console.log(resp);
      }, (err) => {
        this.hayError = true;
      });
  }
}
