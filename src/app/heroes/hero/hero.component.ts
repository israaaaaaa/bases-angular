import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public nombre : string = 'israel arroyo gomez';
  public edad: number = 45;

  get capitalizedIsra():string {
    return this.nombre.toUpperCase();
  }

  getDescriptionHero(): string {
    return this.capitalizedIsra + " --- "+ this.edad;
  }

  changeName ():void {
    this.nombre = 'Spiderman';
  }

  changeEdad (): void {
    this.edad = 25;
  }

}
