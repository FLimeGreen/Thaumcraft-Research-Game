import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefusionView } from './defusion-view';

describe('DefusionView', () => {
  let component: DefusionView;
  let fixture: ComponentFixture<DefusionView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefusionView],
    }).compileComponents();

    fixture = TestBed.createComponent(DefusionView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
