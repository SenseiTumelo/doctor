import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private db : AngularFireDatabase) { }
  create(account){
    return this.db.list('/create-account').push(account);
  }
  getAll(){
    return this.db.list('/create-account');
  }
}
