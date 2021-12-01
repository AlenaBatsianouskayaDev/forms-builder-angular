import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {select, Store} from '@ngrx/store'
import { Observable } from 'rxjs';
import { selectUser } from 'src/app/reducers/auth/user.selectors';
import { HttpClient } from '@angular/common/http';
import { User } from './../../services/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
  
export class LoginFormComponent implements OnInit {
  
  user: User | undefined;
  // public user$: Observable<String> = this.store$.pipe(select(selectUser));
  // inputProps = ['Login', 'Password'];
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // console.log("запрос")
    // this.http.get('http://localhost:4200/api/users').subscribe((data:any) => this.user=new User(data.name, data.password));
    // console.log(this.user);
  }


  loginRequest(f: NgForm): void {
    console.log('LOGIN')
    // this.store.dispatch(loginRequest());
    // console.log(f.value);  // { first: '', last: '' }
    // console.log(f.valid);  // false
  }

}
