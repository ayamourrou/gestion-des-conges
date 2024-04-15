import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompAddEditComponent } from './comp-add-edit.component';

describe('CompAddEditComponent', () => {
  let component: CompAddEditComponent;
  let fixture: ComponentFixture<CompAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompAddEditComponent],
    });
    fixture = TestBed.createComponent(CompAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
