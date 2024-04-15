import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCongesAccepteUserComponent } from './table-conges-accepte-user.component';

describe('TableCongesAccepteUserComponent', () => {
  let component: TableCongesAccepteUserComponent;
  let fixture: ComponentFixture<TableCongesAccepteUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableCongesAccepteUserComponent]
    });
    fixture = TestBed.createComponent(TableCongesAccepteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
