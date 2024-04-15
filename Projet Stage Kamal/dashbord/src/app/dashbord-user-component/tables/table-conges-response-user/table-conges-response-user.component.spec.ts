import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCongesResponseUserComponent } from './table-conges-response-user.component';

describe('TableCongesResponseUserComponent', () => {
  let component: TableCongesResponseUserComponent;
  let fixture: ComponentFixture<TableCongesResponseUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableCongesResponseUserComponent]
    });
    fixture = TestBed.createComponent(TableCongesResponseUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
