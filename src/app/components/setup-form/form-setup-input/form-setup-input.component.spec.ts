import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSetupInputComponent } from './form-setup-input.component';

describe('FormSetupInputComponent', () => {
  let component: FormSetupInputComponent;
  let fixture: ComponentFixture<FormSetupInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSetupInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSetupInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
