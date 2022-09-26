import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepinComponent } from './components/changepin/changepin.component';
import { CheckBookComponent } from './components/check-book/check-book.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { CreatepinComponent } from './components/createpin/createpin.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DebitCardComponent } from './components/debit-card/debit-card.component';
import { FirstTimeDepositeComponent } from './components/first-time-deposite/first-time-deposite.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeLoanComponent } from './components/home-loan/home-loan.component';
import { HomeComponent } from './components/home/home.component';
import { InterestComponent } from './components/interest/interest.component';
import { LoanComponent } from './components/loan/loan.component';

import { PersonalLoanComponent } from './components/personal-loan/personal-loan.component';

import { ServicesComponent } from './components/services/services.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { StopChequeComponent } from './components/stop-cheque/stop-cheque.component';
import { TermsandconditionComponent } from './components/termsandcondition/termsandcondition.component';
import { UserdataComponent } from './components/userdata/userdata.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'user/home',pathMatch:'full'},
  {path:'create-account',component:CreateAccountComponent},
  {path:'debit-card',component:DebitCardComponent},
  {path:'check-book',component:CheckBookComponent},
  {path:'services',component:ServicesComponent},
  {path:'personal-loan',component:PersonalLoanComponent},
  {path:'home-loan',component:HomeLoanComponent},
  {path:'loan',component:LoanComponent},
  {path:'deposite',component:FirstTimeDepositeComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'stopcheque',component:StopChequeComponent},
  {path:'createpin',component:CreatepinComponent},
  {path:'takesdate',component:DatepickerComponent },
  {path:'interest',component:InterestComponent},
  {path:'signup',component:SignupComponent},
  {path:'userdata',component:UserdataComponent},
  {path:'signin',component:SigninComponent},
  {path:'changepin',component:ChangepinComponent},
  {path:'**',component:FooterComponent},
  {path:'condition',component:TermsandconditionComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
