import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSetupCheckboxComponent } from './form-setup-checkbox.component';

describe('FormSetupCheckboxComponent', () => {
  let component: FormSetupCheckboxComponent;
  let fixture: ComponentFixture<FormSetupCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSetupCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSetupCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
