import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListProductsComponent } from './products/list-products.component';
import { RegisterService } from './services/register.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmiTenuresComponent } from './emi-tenures/emi-tenures.component';
import { from } from 'rxjs';
import { ProductService } from './services/product.service';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { EMICardService } from './services/emicard.service';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AdminServiceService } from './services/admin.service';
import { EmailService } from './services/email.service';
import { LoginService } from './services/login.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './auth.guard';
import { AdminAuthGuard } from './admin-auth.guard';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

const appRoutes: Routes = [
  { path:'list', component: ListProductsComponent },
  { path: 'register', component: RegisterComponent}​​​​​,
  { path: 'resetpassword', component: ResetpasswordComponent}​​​​​,
  {​​​​​ path: 'changepassword', component:ChangepasswordComponent}​​​​​,
  {​​​​​ path: 'adminview', component:AdminViewComponent,canActivate: [AdminAuthGuard],}​​​​​,
  { path:'dashboard', component: DashboardComponent, canActivate: [AuthGuard],},
  { path: 'login', component: LoginComponent },
  { path: 'tenure', component: EmiTenuresComponent, canActivate: [AuthGuard],},
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'gateway/:id', component: PaymentGatewayComponent },
  { path: 'adminlogin', component: AdminLoginComponent },
  { path: 'notfound', component: PageNotFoundComponent },
  { path: 'terms', component: TermsAndConditionsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    LoginComponent,
    DashboardComponent,
    EmiTenuresComponent,
    ProductFilterPipe,
    PaymentGatewayComponent,
    AdminViewComponent,
    ChangepasswordComponent,
    RegisterComponent,
    ResetpasswordComponent,
    AdminLoginComponent,
    PageNotFoundComponent,
    TermsAndConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EMICardService, ProductService, RegisterService, AdminServiceService, EmailService, LoginService, AuthGuard, AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
