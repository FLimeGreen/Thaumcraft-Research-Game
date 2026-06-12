import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchFieldControllline } from './research-field-controllline';

describe('ResearchFieldControllline', () => {
  let component: ResearchFieldControllline;
  let fixture: ComponentFixture<ResearchFieldControllline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchFieldControllline],
    }).compileComponents();

    fixture = TestBed.createComponent(ResearchFieldControllline);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
