import {Injectable} from '@angular/core';
import {Blog} from './blog';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class BlogsService {

  MOCK_BLOGS: Blog[] = [
    new Blog(1, 'Title 01', '2017-12-03', 'http://localhost:4200/blogs/1'),
    new Blog(2, 'Title 02', '2017-12-03', 'http://localhost:4200/blogs/2'),
    new Blog(3, 'Title 03', '2017-12-03', 'http://localhost:4200/blogs/3'),
    new Blog(4, 'Title 04', '2017-12-03', 'http://localhost:4200/blogs/4'),
    new Blog(5, 'Title 05', '2017-12-03', 'http://localhost:4200/blogs/5'),
  ];

  constructor() {
  }

  public getBlogs(): Observable<Blog[]> {
    return of(this.MOCK_BLOGS);
  }

}

