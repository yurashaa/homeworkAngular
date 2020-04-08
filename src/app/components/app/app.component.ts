import { Component } from '@angular/core';
import {PostService} from "../../services/post/post.service";
import {CommentService} from "../../services/comment/comment.service";
import {PostModel} from "../../models/PostModel";
import {CommentModel} from "../../models/CommentModel";
import {UserService} from "../../services/user/user.service";
import {UserModel} from "../../models/UserModel";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: PostModel[];
  comments: CommentModel[];
  users: UserModel[];

  constructor(private userService: UserService, private postService: PostService, private commentService: CommentService) {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });

    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    });

    this.commentService.getComments().subscribe(data => {
      this.comments = data;
    });
  }
}
