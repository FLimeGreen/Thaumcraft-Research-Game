import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasarSingleItemDisplay } from './basar-single-item-display';

describe('BasarSingleItemDisplay', () => {
  let component: BasarSingleItemDisplay;
  let fixture: ComponentFixture<BasarSingleItemDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasarSingleItemDisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(BasarSingleItemDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
