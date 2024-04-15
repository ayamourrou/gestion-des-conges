import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarButtonUserComponent } from './toolbar-button-user.component';

describe('ToolbarButtonUserComponent', () => {
  let component: ToolbarButtonUserComponent;
  let fixture: ComponentFixture<ToolbarButtonUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarButtonUserComponent]
    });
    fixture = TestBed.createComponent(ToolbarButtonUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
