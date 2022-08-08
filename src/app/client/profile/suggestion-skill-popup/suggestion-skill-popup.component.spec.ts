import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionSkillPopupComponent } from './suggestion-skill-popup.component';

describe('SuggestionSkillPopupComponent', () => {
  let component: SuggestionSkillPopupComponent;
  let fixture: ComponentFixture<SuggestionSkillPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionSkillPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionSkillPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
