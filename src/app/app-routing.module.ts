
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeViewComponent } from './views/home-view/home-view.component';
import { FormBuilderViewComponent } from './views/form-builder-view/form-builder-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { RegistrationViewComponent } from './views/registration-view/registration-view.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeViewComponent  },
  { path: 'form-builder', component: FormBuilderViewComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginViewComponent }, 
  { path: 'registration', component: RegistrationViewComponent }, 
  // { path: '**', component: NotFoundComponent }, 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
