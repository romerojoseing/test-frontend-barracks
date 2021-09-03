import { Component, OnInit } from '@angular/core';
import { AppService } from "../../../services/app.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  active = 1;
  nasaInfo = null;
  pokemonInfo = null;
  pokemonSelected = null;

  constructor(
    public appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.getNasa().subscribe(result => {
      this.nasaInfo = result;
      console.log(result);
    });

    this.appService.getPokemon().subscribe(result => {
      this.pokemonInfo = result;
      console.log(result);
    });
  }

  sendPoke(value){
    console.log("cjange")
    console.log(value.target.value)
    this.appService.getPokemonItem(value.target.value).subscribe(result => {
      this.pokemonSelected = result;
      console.log(result);
    });
  }

}
