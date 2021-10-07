import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {


  handleResponse(res: any ) {
    console.log(res)
    switch (res.status) {
      case 200:
      case 201:
      case 204:
        return res.body || 'unhandled response'
      default:
        return this.handleError(res)
    }
  }

  /**
   * La api siempre regresa un status 200 y por lo tanto no se pueden gestionar las respuestas correctamente.
   * Deprecated
   * @deprecated
   * @param error 
   */
  handleError(error: HttpErrorResponse) {
    return of(error);
  }

}
