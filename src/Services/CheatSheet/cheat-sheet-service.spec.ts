import { TestBed } from '@angular/core/testing';

import { CheatSheetService } from './cheat-sheet-service';

describe('CheatSheetService', () => {
  let service: CheatSheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheatSheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
