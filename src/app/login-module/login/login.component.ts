import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ErrorStateMatcher } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

export class BaseErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export class EmailErrorStateMatcher extends BaseErrorStateMatcher {

}

export class UsernameErrorStateMatcher extends BaseErrorStateMatcher {

}

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  usernameFormControl = new FormControl('', [
    Validators.required
  ]);

  emailMatcher = new EmailErrorStateMatcher();
  usernameMatcher = new UsernameErrorStateMatcher();

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
  }

  setMessage(): void {
    this.message = 'Logged ' + this.authService.isLoggedIn ? 'in' : 'out';
  }

  login() {
    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        const redirect = this.authService.redirectUtl ? this.authService.redirectUtl : '/admin';
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };
        this.router.navigate([redirect], navigationExtras);
      }
    }
    );
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }


}
