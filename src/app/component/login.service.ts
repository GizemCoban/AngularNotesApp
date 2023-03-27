import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLogin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    this.isLogin.next(
      localStorage.getItem('isLogin') === 'true' ? true : false
    );
  }

  singIn(username: string, password: string) {
    if (username === 'admin' && password === '12345') {
      this.isLogin.next(true);
      localStorage.setItem('isLogin', 'true');
      this.router.navigate(['home']);
    }
  }

  getIsLogIn(): Observable<boolean> {
    return this.isLogin.asObservable();
  }

  signOut() {
    this.isLogin.next(false);
    localStorage.removeItem('isLogin');
    this.router.navigate(['/']);
  }
}
