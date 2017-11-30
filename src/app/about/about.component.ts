import {Component, OnInit} from '@angular/core';
import {AboutService} from '../about.service';
import {About} from './about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  private aboutInfo: About;

  constructor(private service: AboutService) {
  }

  ngOnInit() {
    this.setAboutInfo();
    console.log(this.aboutInfo.content);
  }

  setAboutInfo(): void {
    this.service.getAboutInfo().subscribe(aboutInfo => this.aboutInfo = aboutInfo);
  }

}
