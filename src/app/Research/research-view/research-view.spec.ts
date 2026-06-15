import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchView } from './research-view';

describe('ResearchView', () => {
  let component: ResearchView;
  let fixture: ComponentFixture<ResearchView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchView],
    }).compileComponents();

    fixture = TestBed.createComponent(ResearchView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
