import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefusionControllline } from './defusion-controllline';

describe('DefusionControllline', () => {
  let component: DefusionControllline;
  let fixture: ComponentFixture<DefusionControllline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefusionControllline],
    }).compileComponents();

    fixture = TestBed.createComponent(DefusionControllline);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
