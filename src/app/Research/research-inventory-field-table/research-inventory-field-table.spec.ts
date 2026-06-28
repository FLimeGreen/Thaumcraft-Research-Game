import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchInventoryFieldTable } from './research-inventory-field-table';

describe('ResearchInventoryFieldTable', () => {
  let component: ResearchInventoryFieldTable;
  let fixture: ComponentFixture<ResearchInventoryFieldTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchInventoryFieldTable],
    }).compileComponents();

    fixture = TestBed.createComponent(ResearchInventoryFieldTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
