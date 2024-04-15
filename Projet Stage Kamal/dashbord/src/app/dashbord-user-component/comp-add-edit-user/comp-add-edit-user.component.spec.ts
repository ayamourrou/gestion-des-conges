import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompAddEditUserComponent } from './comp-add-edit-user.component';

describe('CompAddEditUserComponent', () => {
  let component: CompAddEditUserComponent;
  let fixture: ComponentFixture<CompAddEditUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompAddEditUserComponent]
    });
    fixture = TestBed.createComponent(CompAddEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
