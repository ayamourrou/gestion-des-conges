import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCCongesComponent } from './body-c-conges.component';

describe('BodyCCongesComponent', () => {
  let component: BodyCCongesComponent;
  let fixture: ComponentFixture<BodyCCongesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyCCongesComponent]
    });
    fixture = TestBed.createComponent(BodyCCongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
