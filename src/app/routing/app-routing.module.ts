
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormBuilderComponent } from '../components/form-builder/form-builder.component';
import { LoginFormComponent } from '../components/login-form/login-form.component';
import { RegistrationFormComponent } from '../components/registration-form/registration-form.component';
import { AuthGuard } from '../guards/auth/auth.guard';

const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'form-builder', component: FormBuilderComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginFormComponent  }, 
  { path: 'registration', component: RegistrationFormComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
