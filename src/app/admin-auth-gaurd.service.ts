import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

/*
@Injectable({
  providedIn: 'root'
})
export class AdminAuthGaurdService implements CanActivate{

  constructor(private auth: AuthService, private userService: UserService) { }
  
  canActivate(): Observable<boolean> {
    this.auth.user$.switchMap(user => this.userService.get(user.uid)).map(appUser => appUser.isAdmin);

  
  }
}*/
