import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSetupButtonComponent } from './form-setup-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { INITIAL_STYLES } from 'src/app/utils/data';
import { IFormFieldData } from 'src/app/reducers/reducers.interfaces';

describe('FormSetupButtonComponent', () => {
  let component: FormSetupButtonComponent;
  let fixture: ComponentFixture<FormSetupButtonComponent>;
  let initialSetup: IFormFieldData;
  const buttonText = INITIAL_STYLES.buttonText;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({}),],
      declarations: [ FormSetupButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSetupButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
