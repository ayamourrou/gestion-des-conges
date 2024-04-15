import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCongesAccepteComponent } from './table-conges-accepte.component';

describe('TableCongesAccepteComponent', () => {
  let component: TableCongesAccepteComponent;
  let fixture: ComponentFixture<TableCongesAccepteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableCongesAccepteComponent]
    });
    fixture = TestBed.createComponent(TableCongesAccepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
