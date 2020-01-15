import { Injectable, getModuleFactory } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private db: AngularFireDatabase) { 

   }

  getDoctor(){
    return this.db.list('/Doctors');
  }

}
