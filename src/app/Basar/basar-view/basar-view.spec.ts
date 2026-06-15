import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasarView } from './basar-view';

describe('BasarView', () => {
  let component: BasarView;
  let fixture: ComponentFixture<BasarView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasarView],
    }).compileComponents();

    fixture = TestBed.createComponent(BasarView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
