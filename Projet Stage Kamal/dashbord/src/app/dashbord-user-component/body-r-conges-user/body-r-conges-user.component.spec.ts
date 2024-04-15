import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRCongesUserComponent } from './body-r-conges-user.component';

describe('BodyRCongesUserComponent', () => {
  let component: BodyRCongesUserComponent;
  let fixture: ComponentFixture<BodyRCongesUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyRCongesUserComponent]
    });
    fixture = TestBed.createComponent(BodyRCongesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
