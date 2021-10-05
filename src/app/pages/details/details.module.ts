import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { QuoteComponent } from 'src/app/core/components/quote/quote.component';


@NgModule({
  declarations: [
    DetailsComponent,
    QuoteComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule
  ]
})
export class DetailsModule { }
