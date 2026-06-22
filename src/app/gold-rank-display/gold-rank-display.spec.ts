import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldRankDisplay } from './gold-rank-display';

describe('GoldRankDisplay', () => {
  let component: GoldRankDisplay;
  let fixture: ComponentFixture<GoldRankDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoldRankDisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(GoldRankDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
