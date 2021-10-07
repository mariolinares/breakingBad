import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../models/characters.interface';

@Component({
  selector: 'at-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

  @Input() character: Character;
  @Output() characterEmit = new EventEmitter();

  doAction(character: Character) {
    this.characterEmit.emit(character)
  }
  
}
