import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing/app-routing.module';
import { MaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppTopBarComponent } from './components/app-top-bar/app-top-bar.component';
import { AuthNavComponent } from './components/app-top-bar/auth-nav/auth-nav.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { InputComponent } from './shared/input/input.component';
import { PortalModule } from '@angular/cdk/portal';
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
import { FormSetupInputComponent } from './components/form-builder/setup-form/form-setup-input/form-setup-input.component';
import { FormSetupTextareaComponent } from './components/form-builder/setup-form/form-setup-textarea/form-setup-textarea.component';
import { FormSetupSelectComponent } from './components/form-builder/setup-form/form-setup-select/form-setup-select.component';
import { FormSetupButtonComponent } from './components/form-builder/setup-form/form-setup-button/form-setup-button.component';
import { FormSetupCheckboxComponent } from './components/form-builder/setup-form/form-setup-checkbox/form-setup-checkbox.component';
import { GeneralStylesComponent } from './components/form-builder/setup-form/general-styles/general-styles.component';
import { FormStylesComponent } from './components/form-builder/form-styles/form-styles.component';
import { FormDisplayComponent } from './components/form-builder/form-display/form-display.component';
import { ReactiveComponentModule } from '@ngrx/component';
import { FormBuilderEffects } from './reducers/formBuilder/formBuilder.effects';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { ButtonPanelComponent } from './shared/button-panel/button-panel.component';
import { LocalStorageService } from './services/local-storage.service';
import { FormElementsComponent } from './components/form-builder/form-elements/form-elements.component';
import { FormSetupBaseClassComponent } from './shared/form-setup-base-class/form-setup-base-class.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTopBarComponent, 
    AuthNavComponent,
    AuthFormComponent,
    InputComponent,
    FormSetupInputComponent,
    FormStylesComponent,
    FormDisplayComponent,
    FormSetupTextareaComponent,
    FormSetupSelectComponent,
    FormSetupButtonComponent,
    FormSetupCheckboxComponent,
    GeneralStylesComponent,
    FormBuilderComponent,
    ButtonPanelComponent,
    FormElementsComponent,
    FormSetupBaseClassComponent,
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
    EffectsModule.forRoot([AuthEffects, FormBuilderEffects]),
    PortalModule,
    ReactiveComponentModule
  ],
  exports: [],
  providers: [AuthService, CommonService, LocalStorageService, AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
  
export class AppModule { }
