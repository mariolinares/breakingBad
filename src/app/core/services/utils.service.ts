import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  handleResponse(res: any ) {
    switch (res.status) {
      case 200:
      case 201:
      case 204:
        return res.body || 'unhandled response'
      default:
        return this.handleError(res)
    }
  }

  handleError(error: HttpErrorResponse) {
    return of(error);
  }

}
