
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzServiceName {

    public characters :Character[] = [
        {   
            id:uuid(),
            name:'Krillin',
            power:10
        }, 
        {
            id:uuid(),
            name:'Goku',
            power:1000
        }
    ];

    public onNewCharacterFather(character : Character) :void {
        const newCharacter: Character = {
            id: uuid(),
            ...character
          };

        this.characters.push(newCharacter);
        console.log('main page');
        console.log(newCharacter);
    }

    public onRemoveListener(id:string) :void {
        this.characters = this.characters.filter(character => character.id !== id);
    }
    
}