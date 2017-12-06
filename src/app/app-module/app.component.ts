import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabs = [
    {path: '/blogs', label: 'Blogs'},
    {path: '/resume', label: 'Resume'},
    {path: '/about', label: 'About'},
    {path: '/contact', label: 'Contact'},
    {path: '/ads', label: 'ADs'}
  ];

  public login() {
    console.log('Login...');
  }

}
