import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/core/models/characters.interface';
import { Quote } from 'src/app/core/models/quote.interface';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'at-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  characterName: string;
  character: Character;
  quote: Quote;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpService
  ) {}

  ngOnInit(): void {
    const name: string = this.activatedRoute.snapshot.params.name;
    this.characterName = name.replace(' ', '+');
    this.getDetails(this.characterName);
  }

  getDetails(name: string) {
    this.http.getDetails(name).subscribe((data) => {
      this.character = data.character[0];
      this.quote = data.quote[0] ? data.quote[0] : data.quote;
    });
  }
}
