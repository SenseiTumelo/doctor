import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import { PaymentsComponent } from './payments/payments.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BookingsSuccessfulComponent } from './bookings-successful/bookings-successful.component';
import { MyConsultationsComponent } from './my-consultations/my-consultations.component';
import { AdminConsultationComponent } from './admin/admin-consultation/admin-consultation.component';
import { AdminBookingComponent } from './admin/admin-booking/admin-booking.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ConsultationsComponent,
    PaymentsComponent,
    BookingsComponent,
    BookingsSuccessfulComponent,
    MyConsultationsComponent,
    AdminConsultationComponent,
    AdminBookingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule,//check here for errors
    RouterModule.forRoot([
     { path: '' , component: HomeComponent},
     { path: 'consultations' , component: ConsultationsComponent},
     { path: 'bookings' , component: BookingsComponent},
     { path: 'Booking-Successful' , component:BookingsSuccessfulComponent}, 
     { path: 'My-consultations' , component: MyConsultationsComponent},
     { path: 'admin/consultations' , component: AdminConsultationComponent},
     { path: 'admin/bookings' , component: AdminBookingComponent}, //check here for errors
     { path: 'payments' , component: PaymentsComponent},// check here for errors
     { path: 'login' , component: LoginComponent}, 







    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
