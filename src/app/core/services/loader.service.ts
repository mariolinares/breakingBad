import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  loader$ = this.loader.asObservable()

  getloaderStatus (){
    return this.loader$
  }

  setLoaderStatus(status: boolean){
    return this.loader.next( status )
  }
}
