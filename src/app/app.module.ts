import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { HelloComponent } from './components/hello/hello.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import {UserResolverService} from "./services/UserServices/user-resolver.service";
import { UserComponent } from './components/user/user.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import {PostResolverService} from "./services/PostServices/post-resolver.service";
import {PostComponent} from "./components/post/post.component";
import {CommentResolverService} from "./services/CommentServices/comment-resolver.service";
import { CommentComponent } from './components/comment/comment.component';
import {AllCommentsComponent} from "./components/all-comments/all-comments.component";
import {PostOfUserResolverService} from "./services/PostsOfUserServices/post-of-user-resolver.service";


const routes: Routes = [
  {path: '', component: HelloComponent},
  {path: 'users', component: AllUsersComponent, resolve: {allUsers: UserResolverService}, children: [
      {path: ':id/posts', component: AllPostsComponent, resolve: {allPosts: PostOfUserResolverService}}
    ]},
  {path: 'posts', component: AllPostsComponent, resolve: {allPosts: PostResolverService}, children: [
      {path: ':id/comments', component: AllCommentsComponent}
    ]},
  {path: 'comments', component: AllCommentsComponent, resolve: {allComments: CommentResolverService}, children: [
      {path: ':id/user', component: AllUsersComponent}
    ]},
];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AllUsersComponent,
    UserComponent,
    AllPostsComponent,
    PostComponent,
    AllCommentsComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
