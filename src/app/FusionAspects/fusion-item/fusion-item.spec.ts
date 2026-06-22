import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionItem } from './fusion-item';

describe('FusionItem', () => {
  let component: FusionItem;
  let fixture: ComponentFixture<FusionItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FusionItem],
    }).compileComponents();

    fixture = TestBed.createComponent(FusionItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
