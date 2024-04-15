import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyGCongesComponent } from './body-g-conges.component';

describe('BodyGCongesComponent', () => {
  let component: BodyGCongesComponent;
  let fixture: ComponentFixture<BodyGCongesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyGCongesComponent]
    });
    fixture = TestBed.createComponent(BodyGCongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
