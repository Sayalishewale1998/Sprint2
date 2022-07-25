import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyComponent } from './company/company.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { StockComponent } from './stock/stock.component';
import { HttpClientModule } from '@angular/common/http';
import { GetComponent } from './get/get.component';
import { GetallComponent } from './getall/getall.component';
import { BuyComponent } from './buy/buy.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    CompanyComponent,
    MyprofileComponent,
    StockComponent,
    GetComponent,
    GetallComponent,
    BuyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
