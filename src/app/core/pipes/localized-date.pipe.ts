import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'localizedDate',
})
export class LocalizedDatePipe implements PipeTransform {

  constructor(private translate: TranslateService) {}

  transform(value: any, pattern: string = 'fullDate'): any {

    if(value === 'Unknown'){
      if(true)
      return 'Unknown'
    }

    value = new Date(value);
    const datePipe: DatePipe = new DatePipe(this.translate.currentLang);
    return datePipe.transform(value, pattern, undefined, this.translate.currentLang);
  }

}
