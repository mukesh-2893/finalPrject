import { Component, OnInit } from '@angular/core';

import { UserReg } from '../_model/userReg';
import { Post } from '../_model/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  //Object User
  // user: User = new User();
  post: Post = new Post();
  
  constructor() { }

  ngOnInit(): void {
  }

}
