import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from './core/services/loader.service';

@Component({
  selector: 'at-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'breakingBadApp';

  loader$: Observable<boolean> = new Observable<boolean>();

  constructor(
    private loaderService: LoaderService) {
    this.loader$ = this.loaderService.loader$;
  }
}
