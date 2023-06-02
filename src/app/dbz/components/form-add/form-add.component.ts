import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent {

  @Output()
  public onNewCharacter : EventEmitter <Character> = new EventEmitter();

  public character:Character = {
    name:'',
    power:0
  }

  eventSubmit() {
    if(this.character.name.length === 0)
    return;
    
    this.onNewCharacter.emit(this.character);
    console.log('event emiter');
    this.character = {name:'',power:0}
  }

}
