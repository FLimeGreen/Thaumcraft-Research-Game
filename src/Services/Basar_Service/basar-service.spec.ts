import { TestBed } from '@angular/core/testing';

import { BasarService } from './basar-service';

describe('BasarService', () => {
  let service: BasarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
