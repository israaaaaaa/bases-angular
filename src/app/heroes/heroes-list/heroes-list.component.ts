import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {

  listHeroes : string[] = ['isra', 'pepi', 'kirby', 'fox'];
  public deletedHero?: string;

  deletedHerof():void {
    this.deletedHero = this.listHeroes.pop();    
  }

}
