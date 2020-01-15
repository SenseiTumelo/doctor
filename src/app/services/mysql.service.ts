import { Injectable } from '@angular/core';
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClient,HttpHeaders,HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';



@Injectable({
  providedIn: 'root'
})
export class MysqlService {

  constructor(public _http : HttpClient) {

   }
   public addMysqlDatabase( _lastname: string, _firstname: string){
     const headers = new Headers();


   }
}
