import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  headers: HttpHeaders;

  constructor(private http: HttpClient, private utils: UtilsService) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  getCharacters(url: string, params: HttpParams) {
    return this.http
      .get<any[]>(url, {
        observe: 'response',
        headers: this.headers,
        params,
      })
      .pipe(
        map(
          (res) => this.utils.handleResponse(res),
          catchError((err) => this.utils.handleError(err))
        )
      );
  }
}
