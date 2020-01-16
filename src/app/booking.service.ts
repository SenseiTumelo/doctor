import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private db : AngularFireDatabase) { }
  create(booking){
    return this.db.list('/bookings').push(booking);
  }

  getAll(){
    return this.db.list('/bookings');
  }
  
}
