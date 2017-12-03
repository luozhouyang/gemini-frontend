import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabs = [
    {path: '/blogs', label: 'Blogs'},
    {path: '/about', label: 'About'},
    {path: '/resume', label: 'Resume'},
    {path: '/ads', label: 'ADs'}
  ];
}
