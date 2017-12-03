import {Component, OnInit} from '@angular/core';
import {BlogsService} from './blogs.service';
import {Blog} from './blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  public blogs: Blog[];

  constructor(private blogsService: BlogsService) {
  }

  ngOnInit() {
    this.blogsService.getBlogs().subscribe(blogs => this.blogs = blogs);
  }

}
