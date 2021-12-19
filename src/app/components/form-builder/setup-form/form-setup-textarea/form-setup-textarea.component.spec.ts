import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSetupTextareaComponent } from './form-setup-textarea.component';

describe('FormSetupTextareaComponent', () => {
  let component: FormSetupTextareaComponent;
  let fixture: ComponentFixture<FormSetupTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
