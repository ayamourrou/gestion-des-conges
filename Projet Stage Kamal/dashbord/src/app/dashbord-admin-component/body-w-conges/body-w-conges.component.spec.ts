import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyWCongesComponent } from './body-w-conges.component';

describe('BodyWCongesComponent', () => {
  let component: BodyWCongesComponent;
  let fixture: ComponentFixture<BodyWCongesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyWCongesComponent]
    });
    fixture = TestBed.createComponent(BodyWCongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
