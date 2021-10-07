import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from 'src/app/core/components/card/card.component';
import { SharedModule } from 'src/app/shared.module';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';

@NgModule({
  declarations: [
    CharactersComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule
  ],
})
export class CharactersModule { }
