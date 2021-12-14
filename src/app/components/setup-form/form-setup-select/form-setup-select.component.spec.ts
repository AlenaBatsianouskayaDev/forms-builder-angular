import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSetupSelectComponent } from './form-setup-select.component';

describe('FormSetupSelectComponent', () => {
  let component: FormSetupSelectComponent;
  let fixture: ComponentFixture<FormSetupSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSetupSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSetupSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
