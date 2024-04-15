import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCongesRefuseComponent } from './table-conges-refuse.component';

describe('TableCongesRefuseComponent', () => {
  let component: TableCongesRefuseComponent;
  let fixture: ComponentFixture<TableCongesRefuseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableCongesRefuseComponent]
    });
    fixture = TestBed.createComponent(TableCongesRefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
