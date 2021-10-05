import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable, throwError } from 'rxjs';
import { catchError, first, map, tap } from 'rxjs/operators';
import { Character } from '../models/characters.interface';
import { Quote } from '../models/quote.interface';
import { LoaderService } from './loader.service';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  headers: HttpHeaders;
  API_URL: string = 'https://www.breakingbadapi.com/api/';

  constructor(
    private http: HttpClient,
    private utils: UtilsService,
    private loaderService: LoaderService
  ) {

  }

  getData(url: string, params?: HttpParams) {
    return this.http
      .get<any[]>(url, {
        observe: 'response',
        params,
      }).pipe(
        map(
          (res) => this.utils.handleResponse(res),
          catchError((err) => this.utils.handleError(err))
        ),
        tap(() => this.loaderService.setLoaderStatus(false))
      );
  }


  getDetails(name: string) {
    return forkJoin({
      character: this.getData(`${this.API_URL}characters?name=${name}`),
      quote: this.getData(`${this.API_URL}quote/random?author=${name}`)
    })
  }

  getError(error: Error) {
    console.log('ERROR::::::', error);
    return throwError(error);
  }
}
