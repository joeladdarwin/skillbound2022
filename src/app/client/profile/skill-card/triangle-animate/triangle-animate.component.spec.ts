import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangleAnimateComponent } from './triangle-animate.component';

describe('TriangleAnimateComponent', () => {
  let component: TriangleAnimateComponent;
  let fixture: ComponentFixture<TriangleAnimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriangleAnimateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriangleAnimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
