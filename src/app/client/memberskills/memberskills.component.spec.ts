import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberskillsComponent } from './memberskills.component';

describe('MemberskillsComponent', () => {
  let component: MemberskillsComponent;
  let fixture: ComponentFixture<MemberskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberskillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
