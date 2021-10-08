import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ErrorService } from './error.service';
import { LoaderService } from './loader.service';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  /**
   * 
   * @param http 
   * @param utils 
   * @param loaderService 
   */
  constructor(
    private http: HttpClient,
    private utils: UtilsService,
    private loaderService: LoaderService,
    private errorService: ErrorService
  ) {}

  /**
   * Método para llamar a la api y filtrar las respuestas http
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
          this.errorService.printError(err)
          return of(err);
        }),
        map(
          (res) => this.utils.handleResponse(res)),
          tap(() => this.loaderService.setLoaderStatus(false))
      );
  }
}
