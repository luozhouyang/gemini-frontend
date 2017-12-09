import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthService} from './login/auth.service';
import {AuthGuardService} from './login/auth-guard.service';

const loginRoutes: Routes = [
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [RouterModule],
  declarations: [LoginComponent],
  providers: [AuthService, AuthGuardService]
})
export class LoginRoutingModule {
}
