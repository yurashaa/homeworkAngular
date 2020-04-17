import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HelloComponent} from "./components/hello/hello.component";
import {AllUsersComponent} from "./user/components/all-users/all-users.component";
import {UserResolverService} from "./user/services/UserServices/user-resolver.service";
import {AllPostsComponent} from "./post/components/all-posts/all-posts.component";
import {PostOfUserResolverService} from "./post/services/PostsOfUserServices/post-of-user-resolver.service";
import {PostResolverService} from "./post/services/PostServices/post-resolver.service";
import {AllCommentsComponent} from "./comment/components/all-comments/all-comments.component";
import {CommentResolverService} from "./comment/services/CommentServices/comment-resolver.service";


const routes: Routes = [
  {path: '', component: HelloComponent},
  {path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  {path: 'posts', loadChildren: () => import('./post/post.module').then(m => m.PostModule)},
  {path: 'comments', loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule)},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports : [
    RouterModule,
  ]
})
export class AppRoutingModule { }
