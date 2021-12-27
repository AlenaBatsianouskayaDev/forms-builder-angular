import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSetupCommonClassComponent } from './form-setup-common-class.component';

describe('FormSetupCommonClassComponent', () => {
  let component: FormSetupCommonClassComponent;
  let fixture: ComponentFixture<FormSetupCommonClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSetupCommonClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSetupCommonClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
