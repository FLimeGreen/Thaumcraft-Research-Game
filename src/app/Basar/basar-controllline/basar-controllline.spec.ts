import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasarControllline } from './basar-controllline';

describe('BasarControllline', () => {
  let component: BasarControllline;
  let fixture: ComponentFixture<BasarControllline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasarControllline],
    }).compileComponents();

    fixture = TestBed.createComponent(BasarControllline);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
