import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralStylesComponent } from './general-styles.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

describe('GeneralStylesComponent', () => {
  let component: GeneralStylesComponent;
  let fixture: ComponentFixture<GeneralStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({}),],
      declarations: [GeneralStylesComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
