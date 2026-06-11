import { TestBed } from '@angular/core/testing';

import { ResearchInventory } from './research-inventory';

describe('ResearchInventory', () => {
  let service: ResearchInventory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResearchInventory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
