
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { FormBuilderViewComponent } from './views/form-builder-view/form-builder-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { RegistrationViewComponent } from './views/registration-view/registration-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'form-builder', component: FormBuilderViewComponent },
  { path: 'login', component: LoginViewComponent }, 
  { path: 'registration', component: RegistrationViewComponent }, 
  // { path: '**', component: NotFound }, 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
