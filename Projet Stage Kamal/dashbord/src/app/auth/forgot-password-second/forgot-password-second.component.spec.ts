import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordSecondComponent } from './forgot-password-second.component';

describe('ForgotPasswordSecondComponent', () => {
  let component: ForgotPasswordSecondComponent;
  let fixture: ComponentFixture<ForgotPasswordSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotPasswordSecondComponent]
    });
    fixture = TestBed.createComponent(ForgotPasswordSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
