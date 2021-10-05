import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { MaterialModule } from 'src/app/material.module';
import { CardComponent } from 'src/app/core/components/card/card.component';


@NgModule({
  declarations: [
    CharactersComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    MaterialModule
  ]
})
export class CharactersModule { }
