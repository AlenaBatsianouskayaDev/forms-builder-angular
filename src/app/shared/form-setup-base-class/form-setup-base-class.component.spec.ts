import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { FormSetupBaseClassComponent } from './form-setup-base-class.component';
import { StoreModule } from '@ngrx/store';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { PortalModule } from '@angular/cdk/portal';

fdescribe('FormSetupCommonClassComponent', () => {
  let component: FormSetupBaseClassComponent;
  let fixture: ComponentFixture<FormSetupBaseClassComponent>;
  let controlInputFieldText: AbstractControl | null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatCheckboxModule,
        MatSelectModule,
        DragDropModule,
        CdkAccordionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatRadioModule,
        MatIconModule,
        StoreModule.forRoot({}),
      ],
      declarations: [ FormSetupBaseClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSetupBaseClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    controlInputFieldText = component.formElementsStyles.get('inputFieldText')
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
