import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { FormDisplayComponent } from './form-display.component';
import { CommonService } from './../../../services/common.service';
import { ReactiveComponentModule } from '@ngrx/component';

describe('FormDisplayComponent', () => {
  let component: FormDisplayComponent;
  let fixture: ComponentFixture<FormDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        ReactiveComponentModule,
      ],
      providers: [ CommonService ],
      declarations: [ FormDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
