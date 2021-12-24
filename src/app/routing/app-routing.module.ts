
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormBuilderComponent } from '../components/form-builder/form-builder.component';
import { AuthFormComponent } from '../components/auth-form/auth-form.component';
import { AuthGuard } from '../guards/auth/auth.guard';

const routes: Routes = [
  { path: 'form-builder', component: FormBuilderComponent, canActivate: [AuthGuard] },
  { path: 'login', component: AuthFormComponent  }, 
  { path: 'registration', component: AuthFormComponent },
  { path: '**', redirectTo: "/login"},
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  //TODO page not found
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
