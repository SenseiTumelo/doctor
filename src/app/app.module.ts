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
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';


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
     { path: 'consultations' , component: ConsultationsComponent ,canActivate: [AuthGuardService] },
     { path: 'bookings' , component: BookingsComponent, canActivate: [AuthGuardService] },
     { path: 'Booking-Successful' , component:BookingsSuccessfulComponent ,canActivate: [AuthGuardService] }, 
     { path: 'My-consultations' , component: MyConsultationsComponent,canActivate: [AuthGuardService]  },
     { path: 'admin/consultations' , component: AdminConsultationComponent,canActivate: [AuthGuardService] },
     { path: 'admin/bookings' , component: AdminBookingComponent,canActivate: [AuthGuardService] },
     { path: 'payments' , component: PaymentsComponent,canActivate: [AuthGuardService] },
     { path: 'login' , component: LoginComponent}, 

    ])
  ],
  providers: [AuthService, AuthGuardService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
