import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCongesRefuseUserComponent } from './table-conges-refuse-user.component';

describe('TableCongesRefuseUserComponent', () => {
  let component: TableCongesRefuseUserComponent;
  let fixture: ComponentFixture<TableCongesRefuseUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableCongesRefuseUserComponent]
    });
    fixture = TestBed.createComponent(TableCongesRefuseUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
