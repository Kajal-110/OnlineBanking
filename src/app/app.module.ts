import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { CheckBookComponent } from './components/check-book/check-book.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { CreatepinComponent } from './components/createpin/createpin.component';
import { DebitCardComponent } from './components/debit-card/debit-card.component';
import { FirstTimeDepositeComponent } from './components/first-time-deposite/first-time-deposite.component';
import { HomeComponent } from './components/home/home.component';
import { HomeLoanComponent } from './components/home-loan/home-loan.component';
import { LoanComponent } from './components/loan/loan.component';
import { PersonalLoanComponent } from './components/personal-loan/personal-loan.component';
import { ServicesComponent } from './components/services/services.component';
import { StopChequeComponent } from './components/stop-cheque/stop-cheque.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { DatepickerComponent } from './components/datepicker/datepicker.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { InterestComponent } from './components/interest/interest.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component'
import { AuthservicesService } from './services/authservices.service';
import { ChangepinComponent } from './components/changepin/changepin.component';
import { UserdataComponent } from './components/userdata/userdata.component';
import {MatButtonModule} from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { TermsandconditionComponent } from './components/termsandcondition/termsandcondition.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    CheckBookComponent,
    ContactUsComponent,
    CreateAccountComponent,
    CreatepinComponent,
    DebitCardComponent,FirstTimeDepositeComponent,
    HeaderComponent,
    HomeComponent,
    HomeLoanComponent,
    LoanComponent,
    PersonalLoanComponent,
    ServicesComponent,
    StopChequeComponent,
    
    UserDashboardComponent,
    DatepickerComponent,
    InterestComponent,
    SigninComponent,
    SignupComponent,
    ChangepinComponent,
    UserdataComponent,
    TermsandconditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule, MatNativeDateModule ,MatInputModule,MatToolbarModule,MatIconModule
  
  ],
  providers: [AuthservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
