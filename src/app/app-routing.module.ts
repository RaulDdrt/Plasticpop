import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { registerEscClick } from 'ngx-bootstrap/utils';
import { RegistrerComponent } from './pages/registrer/registrer.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "register", component: RegistrerComponent},
  {path: "login", component: LoginComponent},
  {path: "profile", component: ProfileComponent},
  {path: "product", component: ProductComponent},
  {path: "profile/product", component: ProductComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
