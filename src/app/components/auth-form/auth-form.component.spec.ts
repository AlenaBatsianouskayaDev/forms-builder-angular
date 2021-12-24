import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFormComponent } from './auth-form.component';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

fdescribe('AuthFormComponent', () => {
  let component: AuthFormComponent;
  let fixture: ComponentFixture<AuthFormComponent>;
  let controlU: AbstractControl | null;
  let controlP: AbstractControl | null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({}),],
      declarations: [AuthFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthFormComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
    controlU = component.authForm.get('username')
    controlP = component.authForm.get('password')
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 2 controls', () => {
    expect(component.authForm.contains('username')).toBe(true)
    expect(component.authForm.contains('password')).toBe(true)
  })

  it('should mark controls as invalid if empty value', () => {
    controlU?.setValue('')
    controlP?.setValue('')
    expect(controlU?.valid).toEqual(false)
    expect(controlP?.valid).toBeFalsy()
  })

  it('should mark password as invalid if value length less 5', () => {
    controlP?.setValue('1234')
    expect(controlP?.valid).toBeFalsy()
  })
})
