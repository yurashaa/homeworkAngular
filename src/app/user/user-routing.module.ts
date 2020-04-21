import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUsersComponent} from "./components/all-users/all-users.component";
import {UserResolverService} from "./services/UserServices/user-resolver.service";

const routes: Routes = [
  {path: '', component: AllUsersComponent, resolve: {allUsers: UserResolverService}, children: [
      {path: ':id', loadChildren: () => import('../post/post.module').then(m => m.PostModule)}
    ]},
  {path: 'user', component: AllUsersComponent, children: [
      {path: ':id', loadChildren: () => import('../post/post.module').then(m => m.PostModule)}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
