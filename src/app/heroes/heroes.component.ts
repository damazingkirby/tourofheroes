import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/hero';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  hero: Hero = {
    id: 1,
    name: 'Windstrom'
}; 
    heroes = HEROES;
    constructor() { }

    ngOnInit(): void {
      
    }
    selectedHero?: Hero;
    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }

    
}
