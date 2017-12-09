import {Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public error: string;
  message: string;

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
