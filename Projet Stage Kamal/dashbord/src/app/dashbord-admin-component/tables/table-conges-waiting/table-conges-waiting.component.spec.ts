import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCongesWaitingComponent } from './table-conges-waiting.component';

describe('TableCongesWaitingComponent', () => {
  let component: TableCongesWaitingComponent;
  let fixture: ComponentFixture<TableCongesWaitingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableCongesWaitingComponent]
    });
    fixture = TestBed.createComponent(TableCongesWaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
