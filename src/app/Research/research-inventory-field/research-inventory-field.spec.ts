import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchInventoryField } from './research-inventory-field';

describe('ResearchInventoryField', () => {
  let component: ResearchInventoryField;
  let fixture: ComponentFixture<ResearchInventoryField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchInventoryField],
    }).compileComponents();

    fixture = TestBed.createComponent(ResearchInventoryField);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
