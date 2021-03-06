import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-app',
    template:`
        <h1>{{title}}</h1>
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
        <h2>My Heroes</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes" [class.selected]="selectedHero === hero" (click)="onSelect(hero)">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
    `,
    providers: [HeroService]
})
export class AppComponent implements OnInit {
    title = 'Tour of Heroes';
    selectedHero: Hero;
    heroes: Hero[];

    constructor(private heroService: HeroService){}
    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit(): void{
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
