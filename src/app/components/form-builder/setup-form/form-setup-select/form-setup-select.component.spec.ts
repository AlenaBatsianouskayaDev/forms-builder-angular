import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSetupSelectComponent } from './form-setup-select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

describe('FormSetupSelectComponent', () => {
  let component: FormSetupSelectComponent;
  let fixture: ComponentFixture<FormSetupSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
       imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({}),],
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
