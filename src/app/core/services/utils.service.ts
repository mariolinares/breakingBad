import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  handleResponse(res: any) {
    switch (res.status) {
      case 200:
      case 201:
      case 204:
        return res.body || 'unhandled 204 response'
      case 202:
        return res.body && res.body.error && res.body.error[0]
          ? res.body.error[0]
          : 'Unhandle 202 response'
      default:
        return this.handleError(res)
    }
  }

  handleError(error: HttpErrorResponse) {
    if (error && error.status) {
      const errorText = `error ${error.status}: ${error.error.error[0].message}`;
      return throwError(errorText)
    }
    return 'error';
  }

}
