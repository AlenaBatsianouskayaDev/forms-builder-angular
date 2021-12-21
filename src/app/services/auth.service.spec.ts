import { TestBed, inject } from "@angular/core/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { AuthService } from "./auth.service";
import { RouterTestingModule } from "@angular/router/testing";
import { Observable, of } from 'rxjs'

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])],
      providers: [AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});



  