import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSaleSkillsComponent } from './add-sale-skills.component';

describe('AddSaleSkillsComponent', () => {
  let component: AddSaleSkillsComponent;
  let fixture: ComponentFixture<AddSaleSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSaleSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSaleSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
