import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LoaderService } from './loader.service';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  API_URL: string = 'https://www.breakingbadapi.com/api/';

  /**
   * 
   * @param http 
   * @param utils 
   * @param loaderService 
   */
  constructor(
    private http: HttpClient,
    private utils: UtilsService,
    private loaderService: LoaderService
  ) {}

  /**
   * 
   * @param url
   * @param params 
   */
  getData(url: string, params?: HttpParams): Observable<any> {
    return this.http
      .get<any[]>(url, {
        observe: 'response',
        params,
      })
      .pipe(
        catchError((err) => {
          console.log(err);
          return of(err);
        }),
        map((res) => this.utils.handleResponse(res)),
        tap(() => this.loaderService.setLoaderStatus(false))
      );
  }
}
