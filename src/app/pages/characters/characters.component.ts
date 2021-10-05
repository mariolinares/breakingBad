import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from 'src/app/core/models/characters.interface';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'at-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters$: Observable<Character[]>;

  constructor(private httpService: HttpService, private router: Router) {
    this.characters$ = new Observable<Character[]>();
  }

  ngOnInit(): void {
    this.characters$ = this.httpService.getData(
      'https://www.breakingbadapi.com/api/characters'
    );
  }

  goToDetails(character: Character) {
    this.router.navigate(['/character/' + character.name]);
  }
}
