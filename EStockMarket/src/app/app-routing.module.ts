import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { StockComponent } from './stock/stock.component';
import { CompanyComponent } from './company/company.component';
import { BuyComponent } from './buy/buy.component';
import { GetComponent } from './get/get.component';
import { GetallComponent } from './getall/getall.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'company',
    component: CompanyComponent
  },
  {
    path: 'stock',
    component: StockComponent
  },
  {
    path: 'myprofile',
    component: MyprofileComponent
  },
  {
    path: 'buy',
    component: BuyComponent
  },
  {
    path: 'get',
    component: GetComponent
  },
  {
    path: 'getall',
    component: GetallComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
