import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {UserModel} from "../../models/UserModel";
import {UserService} from "../../services/UserServices/user.service";
import {PostService} from "../../services/PostServices/post.service";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: UserModel[];
  currentUser: UserModel;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private userService: UserService, private postService: PostService) {
    try {
      this.users = this.activatedRoute.snapshot.data.allUsers;
    } catch (e) {
      console.log(e);
    }
    this.activatedRoute.params.subscribe(value => {
      if(!!value.id){
        const state = this.router.getCurrentNavigation().extras.state;
        if(!!state.comment) {
          this.postService.getPostById(state.comment.postId).subscribe(value => {
            console.log(value);
            this.userService.getUserById(value.userId).subscribe(data => {
              this.users = [data];
            })
          })
        }
      }
    })
  }

  ngOnInit(): void {
  }

  catchUserData(user: UserModel){
    console.log(user);
    this.currentUser = user;
  }

}
