import { ChangeDetectorRef, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { LoaderService } from './core/services/loader.service';

@Component({
  selector: 'at-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loader$: Observable<boolean> = new Observable<boolean>();

  constructor(
    private loaderService: LoaderService,
    private cdRef: ChangeDetectorRef,
    public translate: TranslateService
    ) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  ngAfterViewChecked() {
    this.loader$ = this.loaderService.loader$;
    this.cdRef.detectChanges();
  }

}
