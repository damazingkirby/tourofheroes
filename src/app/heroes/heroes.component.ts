import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/hero';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

    heroes: Hero[] = [];

    constructor(private heroService: HeroService) {}

    ngOnInit(): void {
        this.getHeroes();
      
    }
    
    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

}
