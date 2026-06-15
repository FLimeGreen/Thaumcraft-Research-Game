import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchField } from './research-field';

describe('ResearchField', () => {
  let component: ResearchField;
  let fixture: ComponentFixture<ResearchField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchField],
    }).compileComponents();

    fixture = TestBed.createComponent(ResearchField);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
