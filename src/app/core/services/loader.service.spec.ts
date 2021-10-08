import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('call setLoaderStatus and set observable', () => {
    const spy = spyOn(service.loader, 'next');
    service.setLoaderStatus(true)
    expect(spy).toHaveBeenCalled()
  });

});
