import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsSuccessfulComponent } from './bookings-successful.component';

describe('BookingsSuccessfulComponent', () => {
  let component: BookingsSuccessfulComponent;
  let fixture: ComponentFixture<BookingsSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
