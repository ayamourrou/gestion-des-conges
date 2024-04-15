import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyGUsersComponent } from './body-g-users.component';

describe('BodyGUsersComponent', () => {
  let component: BodyGUsersComponent;
  let fixture: ComponentFixture<BodyGUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyGUsersComponent]
    });
    fixture = TestBed.createComponent(BodyGUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
