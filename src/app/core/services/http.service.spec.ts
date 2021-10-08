import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { Character } from '../models/characters.interface';
import { ErrorService } from './error.service';
import { HttpService } from './http.service';
import { UtilsService } from './utils.service';

let mockCharacters: Character[] = [{
  "char_id": 1,
  "name": "Walter White",
  "birthday": "09-07-1958",
  "occupation": [
      "High School Chemistry Teacher",
      "Meth King Pin"
  ],
  "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
  "status": "Presumed dead",
  "nickname": "Heisenberg",
  "appearance": [
      1,
      2,
      3,
      4,
      5
  ],
  "portrayed": "Bryan Cranston",
  "category": "Breaking Bad",
  "better_call_saul_appearance": []
},
{
  "char_id": 2,
  "name": "Jesse Pinkman",
  "birthday": "09-24-1984",
  "occupation": [
      "Meth Dealer"
  ],
  "img": "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441",
  "status": "Alive",
  "nickname": "Cap n' Cook",
  "appearance": [
      1,
      2,
      3,
      4,
      5
  ],
  "portrayed": "Aaron Paul",
  "category": "Breaking Bad",
  "better_call_saul_appearance": []
}]; 

describe('HttpService', () => {
  let service: HttpService;
  let httpMock: HttpTestingController;
  let errorService: ErrorService;
  let utils: UtilsService;

  let URL_API: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ],
      providers: [ HttpService ]
    });
  });

  beforeEach(() => {
    service = TestBed.inject(HttpService);
    errorService = TestBed.inject(ErrorService);
    utils = TestBed.inject(UtilsService);

    httpMock = TestBed.inject(HttpTestingController)
    URL_API = environment.API_URL;
  })

  afterEach(() => {
    httpMock.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('call getData and return data', () => {
    let url = `${URL_API}characters`
    service.getData(url).subscribe(data => {
      expect(data).toEqual(mockCharacters)
      expect(data.length).toBe(2)
      expect(data[0].char_id).toBeDefined()
    })

    const req = httpMock.expectOne(`${URL_API}characters`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCharacters)
  });


  it('call getData and return error', () => {
    let url = `${URL_API}characters`;
    let spy = spyOn(errorService, 'printError');
    let spyHandleResponse = spyOn(utils, 'handleResponse');

    service.getData(url).subscribe(
      (data) => null, 
      (error) => {
        expect(spyHandleResponse).toHaveBeenCalled()
        expect(spy).toHaveBeenCalledWith(error)
        expect(error.statusText).toEqual('Error inesperado');
        expect(error.status).toEqual(500);
      }
    );
    const req = httpMock.expectOne(req => req.method === 'GET' && req.url === url);
    expect(req.request.method).toBe('GET');
    req.flush({}, { status: 500, statusText: 'Error inesperado' })
  });
});


/* getData(url: string, params?: HttpParams): Observable<any> {
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
} */