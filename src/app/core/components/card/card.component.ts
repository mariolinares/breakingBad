import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../models/characters.interface';

@Component({
  selector: 'at-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() character: Character;
  @Output() characterId = new EventEmitter();

  doAction(character: Character) {
    console.log('Seleccionado: ', character )
    this.characterId.emit(character)
  }

}
