import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { QuoteComponent } from 'src/app/core/components/quote/quote.component';
import { SharedModule } from 'src/app/shared.module';
import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';

@NgModule({
  declarations: [
    DetailsComponent,
    QuoteComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    HttpClientModule,
    SharedModule,
  ]
})
export class DetailsModule { }
