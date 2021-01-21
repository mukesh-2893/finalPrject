import { Component, OnInit } from '@angular/core';


// import { User } from '../user';
import { Post } from '../_model/post';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  //Object User
  // user: User = new User();
  post: Post = new Post();

  constructor() { }

  ngOnInit(): void {
  }

}
