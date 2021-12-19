import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSetupButtonComponent } from './form-setup-button.component';

describe('FormSetupButtonComponent', () => {
  let component: FormSetupButtonComponent;
  let fixture: ComponentFixture<FormSetupButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
