import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllPostsComponent} from "./components/all-posts/all-posts.component";
import {PostResolverService} from "./services/PostServices/post-resolver.service";
import {PostOfUserResolverService} from "./services/PostsOfUserServices/post-of-user-resolver.service";


const routes: Routes = [
  {path: '', component: AllPostsComponent, resolve: {allPosts: PostResolverService}, children: [
      {path: ':id/comments', loadChildren: () => import('../comment/comment.module').then(m => m.CommentModule)}
    ]},
  {path: ':id/posts', component: AllPostsComponent, resolve: {allPosts: PostOfUserResolverService}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
