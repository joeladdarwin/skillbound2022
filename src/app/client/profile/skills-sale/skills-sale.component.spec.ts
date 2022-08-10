import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsSaleComponent } from './skills-sale.component';

describe('SkillsSaleComponent', () => {
  let component: SkillsSaleComponent;
  let fixture: ComponentFixture<SkillsSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
