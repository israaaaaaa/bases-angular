import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onRemoveEmiter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList : Character [] = [
    {
      name:'booo',
      power:10
    }
  ];

  onRemoveCharacter(index :number) :void {
    console.log('index ',index);
  }

  
  onRemoveCharacterEmiter (id: string) :void {
    this.onRemoveEmiter.emit(id);
  }
}
