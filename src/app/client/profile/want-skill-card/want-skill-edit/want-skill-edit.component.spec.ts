import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantSkillEditComponent } from './want-skill-edit.component';

describe('WantSkillEditComponent', () => {
  let component: WantSkillEditComponent;
  let fixture: ComponentFixture<WantSkillEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WantSkillEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WantSkillEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
