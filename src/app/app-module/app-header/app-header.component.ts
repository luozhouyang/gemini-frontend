import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  tabs = [
    { path: '/blogs', label: 'Blogs' },
    { path: '/resume', label: 'Resume' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/ads', label: 'ADs' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
