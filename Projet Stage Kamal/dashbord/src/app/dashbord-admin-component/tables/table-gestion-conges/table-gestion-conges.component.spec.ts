import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGestionCongesComponent } from './table-gestion-conges.component';

describe('TableGestionCongesComponent', () => {
  let component: TableGestionCongesComponent;
  let fixture: ComponentFixture<TableGestionCongesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableGestionCongesComponent]
    });
    fixture = TestBed.createComponent(TableGestionCongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
