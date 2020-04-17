import { Component, OnInit } from '@angular/core';
import {CommentModel} from "../../../models/CommentModel";
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../../services/CommentServices/comment.service";

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  comments: CommentModel[];

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
    try {
      this.comments = this.activatedRoute.snapshot.data.allComments;
    } catch (e) {
      console.log(e)
    }

    this.activatedRoute.queryParams.subscribe(value => {
      if(!!value.idOfPost) {
        this.commentService.getCommentsOfPostById(value.idOfPost).subscribe(data => {
          this.comments = data;
        });
      }
    })
    }

  ngOnInit(): void {
  }

}
