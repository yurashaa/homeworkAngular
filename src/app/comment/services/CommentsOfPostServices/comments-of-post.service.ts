import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentModel} from "../../../models/CommentModel";

@Injectable({
  providedIn: 'root'
})
export class CommentsOfPostService {

  constructor(private http: HttpClient) { }

  getCommentsOfPost (id): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }
}
