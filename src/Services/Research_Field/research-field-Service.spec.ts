import { TestBed } from '@angular/core/testing';

import { ResearchFieldService } from './research-field-Service';

describe('ResearchFieldService', () => {
  let service: ResearchFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResearchFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
