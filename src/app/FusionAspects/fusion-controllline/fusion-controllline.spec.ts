import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionControllline } from './fusion-controllline';

describe('FusionControllline', () => {
  let component: FusionControllline;
  let fixture: ComponentFixture<FusionControllline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FusionControllline],
    }).compileComponents();

    fixture = TestBed.createComponent(FusionControllline);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
