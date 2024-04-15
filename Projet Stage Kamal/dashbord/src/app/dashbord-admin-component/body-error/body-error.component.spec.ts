import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyErrorComponent } from './body-error.component';

describe('BodyErrorComponent', () => {
  let component: BodyErrorComponent;
  let fixture: ComponentFixture<BodyErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyErrorComponent]
    });
    fixture = TestBed.createComponent(BodyErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
