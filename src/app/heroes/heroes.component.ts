import { Component, OnInit,Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'

  // };

heroes = HEROES;

selectedHero: Hero;

onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

   constructor() { }

  ngOnInit() {

  }
}
