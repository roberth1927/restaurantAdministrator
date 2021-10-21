import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefountComponent } from './nopagefount/nopagefount.component';
import { PagesRoutingModulo } from './pages/pages.routing';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  {path: '**', component: NopagefountComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModulo,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
