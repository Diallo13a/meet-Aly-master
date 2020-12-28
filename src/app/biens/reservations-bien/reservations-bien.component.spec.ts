import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsBienComponent } from './reservations-bien.component';

describe('ReservationsBienComponent', () => {
  let component: ReservationsBienComponent;
  let fixture: ComponentFixture<ReservationsBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsBienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
