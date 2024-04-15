import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyWCongesUserComponent } from './body-w-conges-user.component';

describe('BodyWCongesUserComponent', () => {
  let component: BodyWCongesUserComponent;
  let fixture: ComponentFixture<BodyWCongesUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyWCongesUserComponent]
    });
    fixture = TestBed.createComponent(BodyWCongesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
