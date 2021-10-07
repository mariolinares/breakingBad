import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { QuoteComponent } from 'src/app/core/components/quote/quote.component';
import { MaterialModule } from 'src/app/material.module';
import { TildePipe } from 'src/app/core/pipes/tilde.pipe';


@NgModule({
  declarations: [
    DetailsComponent,
    QuoteComponent,
    TildePipe,

  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    MaterialModule
  ]
})
export class DetailsModule { }
