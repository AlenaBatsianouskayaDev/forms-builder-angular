
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormBuilderViewComponent } from './views/form-builder-view/form-builder-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { RegistrationViewComponent } from './views/registration-view/registration-view.component';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  { path: '', component: LoginViewComponent },
  { path: 'form-builder', component: FormBuilderViewComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginViewComponent }, 
  { path: 'registration', component: RegistrationViewComponent }, 
  // { path: '**', component: NotFoundComponent }, //добавить страницу для отсутствующх маршрутов
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
