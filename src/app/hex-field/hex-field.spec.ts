import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexField } from './hex-field';

describe('HexField', () => {
  let component: HexField;
  let fixture: ComponentFixture<HexField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HexField],
    }).compileComponents();

    fixture = TestBed.createComponent(HexField);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
