import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {CommentModel} from "../../../models/CommentModel";
import {Observable} from "rxjs";
import {CommentsOfPostService} from "./comments-of-post.service";

@Injectable({
  providedIn: 'root'
})
export class CommentsOfPostResolverService implements Resolve<CommentModel[]>{

  constructor(private commentOfPostService: CommentsOfPostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommentModel[]> | Promise<CommentModel[]> | CommentModel[] {
    return this.commentOfPostService.getCommentsOfPost(route.queryParams.idOfPost);
  }
}
