import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  posts: any = [];

  constructor(private postservice: PostService) { }

  ngOnInit() {
    this.postservice.getAll()
      .subscribe((res: any[]) => (this.posts = res["data"]))
  }

}
