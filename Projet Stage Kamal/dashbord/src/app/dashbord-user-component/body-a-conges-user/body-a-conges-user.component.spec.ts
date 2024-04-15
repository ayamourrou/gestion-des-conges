import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyACongesUserComponent } from './body-a-conges-user.component';

describe('BodyACongesUserComponent', () => {
  let component: BodyACongesUserComponent;
  let fixture: ComponentFixture<BodyACongesUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyACongesUserComponent]
    });
    fixture = TestBed.createComponent(BodyACongesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
