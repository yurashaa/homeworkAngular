import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostModel} from "../../../models/PostModel";

@Injectable({
  providedIn: 'root'
})
export class PostOfUserService {

  constructor(private http: HttpClient) { }

  getPostsOfUserById(id): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
