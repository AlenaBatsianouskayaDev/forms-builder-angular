import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppTopBarComponent } from './components/app-top-bar/app-top-bar.component';
import { LogoComponent } from './components/app-top-bar/logo/logo.component';
import { AppNavComponent } from './components/app-top-bar/app-nav/app-nav.component';
import { AuthNavComponent } from './components/app-top-bar/auth-nav/auth-nav.component';
import { ContainerComponent } from './shared/container/container.component';
import { FormBuilderViewComponent } from './views/form-builder-view/form-builder-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { RegistrationViewComponent } from './views/registration-view/registration-view.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { InputComponent } from './shared/input/input.component';
import { ButtonSubmitComponent } from './shared/button-submit/button-submit.component';

import { StoreModule } from '@ngrx/store';
import { appReducers, metaReducers } from './reducers/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth/auth.guard';
import { CommonService } from './services/common.service';
import { TokenInterceptorService } from './interceptors/token/token-interceptor.service';
import { AuthEffects } from './reducers/auth/auth.effects';
import { PortalModule } from '@angular/cdk/portal';
import { FormSetupInputComponent } from './components/setup-form/form-setup-input/form-setup-input.component';

import { FormStylesComponent } from './components/form-styles/form-styles.component';
import { FormDisplayComponent } from './components/form-display/form-display.component';
import { ReactiveComponentModule } from '@ngrx/component';
import { FormSetupTextareaComponent } from './components/setup-form/form-setup-textarea/form-setup-textarea.component';
import { FormSetupSelectComponent } from './components/setup-form/form-setup-select/form-setup-select.component';
import { FormSetupButtonComponent } from './components/setup-form/form-setup-button/form-setup-button.component';
import { FormSetupCheckboxComponent } from './components/setup-form/form-setup-checkbox/form-setup-checkbox.component';
import { GeneralStylesComponent } from './components/setup-form/general-styles/general-styles.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTopBarComponent,
    LogoComponent,  
    AppNavComponent,
    AuthNavComponent,
    FormBuilderViewComponent,
    LoginViewComponent,
    RegistrationViewComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    InputComponent,
    ButtonSubmitComponent,
    ContainerComponent,
    FormSetupInputComponent,
    FormStylesComponent,
    FormDisplayComponent,
    FormSetupTextareaComponent,
    FormSetupSelectComponent,
    FormSetupButtonComponent,
    FormSetupCheckboxComponent,
    GeneralStylesComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AuthEffects]),
    PortalModule,
    ReactiveComponentModule
  ],
  exports: [],
  providers: [AuthService, CommonService, AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
  
export class AppModule { }
