import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSetupTextareaComponent } from './form-setup-textarea.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

describe('FormSetupTextareaComponent', () => {
  let component: FormSetupTextareaComponent;
  let fixture: ComponentFixture<FormSetupTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({}),],
      declarations: [ FormSetupTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSetupTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
