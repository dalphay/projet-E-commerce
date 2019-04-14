import { TestBed, inject } from '@angular/core/testing';

import { EComSotoreApiService } from './e-com-sotore-api.service';

describe('EComSotoreApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EComSotoreApiService]
    });
  });

  it('should be created', inject([EComSotoreApiService], (service: EComSotoreApiService) => {
    expect(service).toBeTruthy();
  }));
});
