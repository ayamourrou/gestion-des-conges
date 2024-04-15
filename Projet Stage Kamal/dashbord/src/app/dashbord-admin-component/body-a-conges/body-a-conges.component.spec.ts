import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyACongesComponent } from './body-a-conges.component';

describe('BodyACongesComponent', () => {
  let component: BodyACongesComponent;
  let fixture: ComponentFixture<BodyACongesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyACongesComponent]
    });
    fixture = TestBed.createComponent(BodyACongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
