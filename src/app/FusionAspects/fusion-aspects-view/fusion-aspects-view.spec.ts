import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionAspectsView } from './fusion-aspects-view';

describe('FusionAspectsView', () => {
  let component: FusionAspectsView;
  let fixture: ComponentFixture<FusionAspectsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FusionAspectsView],
    }).compileComponents();

    fixture = TestBed.createComponent(FusionAspectsView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
