import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheatSheet } from './cheat-sheet';

describe('CheatSheet', () => {
  let component: CheatSheet;
  let fixture: ComponentFixture<CheatSheet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheatSheet],
    }).compileComponents();

    fixture = TestBed.createComponent(CheatSheet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
