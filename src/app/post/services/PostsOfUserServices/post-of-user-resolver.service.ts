import { Injectable } from '@angular/core';
import {PostModel} from "../../../models/PostModel";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {PostOfUserService} from "./post-of-user.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostOfUserResolverService implements Resolve<PostModel[]>{

  constructor(private postOfUserService: PostOfUserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostModel[]> | Promise<PostModel[]> | PostModel[] {
    return this.postOfUserService.getPostsOfUserById(route.params.id);
  }
}
