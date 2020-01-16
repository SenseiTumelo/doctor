import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/booking.service';

@Component({
  selector: 'app-admin-booking',
  templateUrl: './admin-booking.component.html',
  styleUrls: ['./admin-booking.component.css']
})
export class AdminBookingComponent implements OnInit {
 booking$;
  constructor(private bookingService: BookingService) { 
    this.booking$= this.bookingService.getAll();
  }

  ngOnInit() {
  }

}
