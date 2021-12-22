import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormComponent } from './registration-form.component';
import { AbstractControl, FormControl, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

fdescribe('RegistrationFormComponent', () => {
  let component: RegistrationFormComponent;
  let fixture: ComponentFixture<RegistrationFormComponent>;
  let controlU: AbstractControl | null;
  let controlP: AbstractControl | null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({}),],
      declarations: [RegistrationFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
    controlU = component.registrationForm.get('username')
    controlP = component.registrationForm.get('password')
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 2 controls', () => {
    expect(component.registrationForm.contains('username')).toBe(true)
    expect(component.registrationForm.contains('password')).toBe(true)
  })

  it('should mark controls as invalid if empty value', () => {
    controlU?.setValue('')
    controlP?.setValue('')
    expect(controlU?.valid).toBeFalsy()
    expect(controlP?.valid).toBeFalsy()
  })

  it('should mark password as invalid if value length less 5', () => {
    controlP?.setValue('1234')
    expect(controlP?.valid).toBeFalsy()
  })
})
