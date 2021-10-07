import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin, Observable, of } from 'rxjs';
import { fadeAnimation } from 'src/app/core/animations/animations';
import { Character } from 'src/app/core/models/characters.interface';
import { Quote } from 'src/app/core/models/quote.interface';
import { replace } from 'src/app/core/models/regex';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'at-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [fadeAnimation]

})
export class DetailsComponent implements OnInit {
  characterName: string;
  character$: Observable<Character>;
  quote$: Observable<Quote>;
  API_URL: string = 'https://www.breakingbadapi.com/api/';

  /**
   * @param activatedRoute 
   * @param http 
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpService,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    const name: string = this.activatedRoute.snapshot.params.name;
    this.characterName = name.replace(replace, "+")    
    this.getDetails(this.characterName);
  }

  /**
   * 
   * @param name String
   */
  getDetails(name: string) {
    return forkJoin({
      character: this.http.getData(`${this.API_URL}characters?name=${name}`),
      quote: this.http.getData(`${this.API_URL}quote/random?author=${name}`),
    }).subscribe(data => {
      this.character$ = of(data.character[0]);
      this.quote$ = of(data.quote[0]);
    })}
}
