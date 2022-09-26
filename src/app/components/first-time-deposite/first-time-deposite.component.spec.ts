import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTimeDepositeComponent } from './first-time-deposite.component';

describe('FirstTimeDepositeComponent', () => {
  let component: FirstTimeDepositeComponent;
  let fixture: ComponentFixture<FirstTimeDepositeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstTimeDepositeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTimeDepositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
