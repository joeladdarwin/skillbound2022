import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantSkillsComponent } from './want-skills.component';

describe('WantSkillsComponent', () => {
  let component: WantSkillsComponent;
  let fixture: ComponentFixture<WantSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WantSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WantSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
