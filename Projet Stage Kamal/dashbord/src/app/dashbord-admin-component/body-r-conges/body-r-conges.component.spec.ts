import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRCongesComponent } from './body-r-conges.component';

describe('BodyRCongesComponent', () => {
  let component: BodyRCongesComponent;
  let fixture: ComponentFixture<BodyRCongesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyRCongesComponent]
    });
    fixture = TestBed.createComponent(BodyRCongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
