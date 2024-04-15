import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGestionUsersComponent } from './table-gestion-users.component';

describe('TableGestionUsersComponent', () => {
  let component: TableGestionUsersComponent;
  let fixture: ComponentFixture<TableGestionUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableGestionUsersComponent]
    });
    fixture = TestBed.createComponent(TableGestionUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
