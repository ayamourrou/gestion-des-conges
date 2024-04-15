import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCongesWaitingUserComponent } from './table-conges-waiting-user.component';

describe('TableCongesWaitingUserComponent', () => {
  let component: TableCongesWaitingUserComponent;
  let fixture: ComponentFixture<TableCongesWaitingUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableCongesWaitingUserComponent]
    });
    fixture = TestBed.createComponent(TableCongesWaitingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
