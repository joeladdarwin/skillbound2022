import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantSkillAddComponent } from './want-skill-add.component';

describe('WantSkillAddComponent', () => {
  let component: WantSkillAddComponent;
  let fixture: ComponentFixture<WantSkillAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WantSkillAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WantSkillAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
