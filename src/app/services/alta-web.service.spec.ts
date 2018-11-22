import { TestBed, inject } from '@angular/core/testing';

import { AltaWebService } from './alta-web.service';

describe('AltaWebService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AltaWebService]
    });
  });

  it('should be created', inject([AltaWebService], (service: AltaWebService) => {
    expect(service).toBeTruthy();
  }));
});
