import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contador app';

  counter: number = 0;

  increaseBy(value: number): void {
    this.counter = this.counter + value;
  }

  decrease(value: number): void {
    this.counter = this.counter - 1;
  }

  reset() {
    this.counter = 0;
  }

}
