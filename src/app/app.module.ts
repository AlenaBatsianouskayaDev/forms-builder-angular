import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppTopBarComponent } from './components/header/app-top-bar/app-top-bar.component';
import { LogoComponent } from './components/header/app-top-bar/logo/logo.component';
import { AppNavComponent } from './components/header/app-top-bar/app-nav/app-nav.component';
import { AuthNavComponent } from './components/header/app-top-bar/auth-nav/auth-nav.component';

import { HomeViewComponent } from './views/home-view/home-view.component';
import { FormBuilderViewComponent } from './views/form-builder-view/form-builder-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { RegistrationViewComponent } from './views/registration-view/registration-view.component';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { InputErrorEmailMatcherComponent } from './shared/input-error-validation/input-error-email-matcher.component';
import { InputComponent } from './shared/input/input.component';
import { ButtonSubmitComponent } from './shared/button-submit/button-submit.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppTopBarComponent,
    LogoComponent,  
    AppNavComponent,
    AuthNavComponent,
    HomeViewComponent,
    FormBuilderViewComponent,
    LoginViewComponent,
    RegistrationViewComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    InputErrorEmailMatcherComponent,
    InputComponent,
    ButtonSubmitComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
  ],
  exports: [],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
  
export class AppModule { }
