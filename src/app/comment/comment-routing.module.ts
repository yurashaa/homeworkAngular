import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllCommentsComponent} from "./components/all-comments/all-comments.component";
import {CommentResolverService} from "./services/CommentServices/comment-resolver.service";

const routes: Routes = [
  {path: '', component: AllCommentsComponent, resolve: {allComments: CommentResolverService}, children: [
      {path: ':id/user', loadChildren: () => import('../user/user.module').then(m => m.UserModule)}
    ]},
  {path: ':id/comments', component: AllCommentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
