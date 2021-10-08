import { TestBed } from '@angular/core/testing';
import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let service: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('call handleResponse with status 200', () => {
    const mock = {id: 1, name: 'Jessy'}
    const res = { status: 200, body: [mock]}
    const handleResponse = service.handleResponse(res)
    expect(handleResponse).toEqual([mock])
  })

  it('call handleResponse with status 200 and without body', () => {
    const res = { status: 200}
    const handleResponse = service.handleResponse(res)
    expect(handleResponse).toEqual('unhandled response')
  })

  it('call handleResponse with status 400', () => {
    const spy = spyOn(service, 'handleError');
    const mock = {id: 1, name: 'Jessy'}
    const res = { status: 400, body: [mock]}
    service.handleResponse(res)
    expect(spy).toHaveBeenCalled()
  })
});
