import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../../models/quote.interface';

@Component({
  selector: 'at-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  @Input() quote: Quote

  ngOnInit(): void {
    console.log('Quote: ', this.quote)
  }

}
