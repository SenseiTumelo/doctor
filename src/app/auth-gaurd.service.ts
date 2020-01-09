import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {//check the authgaurd in the app module


  constructor(private auth: AuthService,private router: Router) { 
  }
  canActivate(){
   return this.auth.user$.map(user => {
     if(user) return true;
     this.router.navigate(['/login']);

     return false;
   })
  }
  
}
