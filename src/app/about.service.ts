import {Injectable} from '@angular/core';
import {About} from './about/about';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class AboutService {

  private aboutInfo: About = new About('I am Luo Zhouyang');

  constructor() {
  }

  getAboutInfo(): Observable<About> {
    return of(this.aboutInfo);
  }

  clearAboutInfo() {
    this.aboutInfo = null;
  }
}
