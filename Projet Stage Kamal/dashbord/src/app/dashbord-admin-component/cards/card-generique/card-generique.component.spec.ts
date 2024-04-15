import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGeneriqueComponent } from './card-generique.component';

describe('CardGeneriqueComponent', () => {
  let component: CardGeneriqueComponent;
  let fixture: ComponentFixture<CardGeneriqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardGeneriqueComponent]
    });
    fixture = TestBed.createComponent(CardGeneriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
