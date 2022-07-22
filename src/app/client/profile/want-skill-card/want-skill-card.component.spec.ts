import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantSkillCardComponent } from './want-skill-card.component';

describe('WantSkillCardComponent', () => {
  let component: WantSkillCardComponent;
  let fixture: ComponentFixture<WantSkillCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WantSkillCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WantSkillCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
