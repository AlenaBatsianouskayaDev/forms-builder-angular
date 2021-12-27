import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSetupBaseClassComponent } from './form-setup-base-class.component';

describe('FormSetupCommonClassComponent', () => {
  let component: FormSetupBaseClassComponent;
  let fixture: ComponentFixture<FormSetupBaseClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSetupBaseClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSetupBaseClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
