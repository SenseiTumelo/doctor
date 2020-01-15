import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'src/app/doctors.service';
import { BookingService } from 'src/app/booking.service';

//import { CategoryService } from 'src/app/category.service';

//writenn as product in the videos
@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
 doctors$;
  constructor(
    doctorService : DoctorsService, 
    private bookingService : BookingService) { 
   this.doctors$ = doctorService.getDoctor;
    //this.categories$ = categoryService.getCategories;
  }

  save(booking){
  
    this.bookingService.create(booking);


  }

  ngOnInit() {
  }

}
