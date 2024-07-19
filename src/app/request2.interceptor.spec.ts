import { TestBed } from '@angular/core/testing';

import { Request2Interceptor } from './request2.interceptor';

describe('Request2Interceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Request2Interceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: Request2Interceptor = TestBed.inject(Request2Interceptor);
    expect(interceptor).toBeTruthy();
  });
});
